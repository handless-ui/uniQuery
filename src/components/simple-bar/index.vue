<template>
    <view class="simple-bar-container" :id="id">
        <UQCanvas v-if="boxWidth != 0 && boxHeight != 0" ref="canvasRef" :width="boxWidth" :height="boxHeight">
        </UQCanvas>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQSimpleBar"
}
</script>
<script setup lang="ts">
import type CanvasType from "vislite/types/Canvas";

import { ref, onMounted, getCurrentInstance } from "vue";
import UQCanvas from "../canvas/index.vue";
import VISLite from "vislite";
import ChartJs from "h5charts/src/chart/index";
import { drawXAxis, drawYAxis } from "../../tools/chart/axis";
import { drawRectBar } from "../../tools/chart/bar";

let id = 'ui-simple-bar-' + (Math.random() * 10000).toFixed(0);
let _this = getCurrentInstance();

let props = defineProps({
    label: {
        type: Array
    },
    data: {
        type: Array
    },
    labelType: {
        type: String,
        default: "xAxis"
    },
    color: {
        type: String,
        default: "rgb(84,112,198)"
    }
});

let boxWidth = ref(0), boxHeight = ref(0), canvasRef = ref();

ChartJs.install(VISLite);
onMounted(() => {
    uni.createSelectorQuery().in(_this).select("#" + id).boundingClientRect((nodeinfo: any) => {
        boxWidth.value = nodeinfo.width;
        boxHeight.value = nodeinfo.height;

        setTimeout(() => {

            canvasRef.value.fetch().then((painter: CanvasType) => {

                let xAxis: any, yAxis: any;
                if (props.labelType == "xAxis") {
                    xAxis = {
                        type: "category",
                        data: props.label
                    };
                    yAxis = {
                        type: "value"
                    };
                } else {
                    xAxis = {
                        type: "value"
                    };
                    yAxis = {
                        type: "category",
                        data: props.label
                    };
                }

                new ChartJs({
                    grid: {
                        width: nodeinfo.width,
                        height: nodeinfo.height,
                        top: 20,
                        right: 20,
                        bottom: 30
                    },
                    xAxis,
                    yAxis,
                    series: [{
                        type: "bar",
                        data: props.data as Array<number>
                    }],
                    update(data) {

                        // 直角坐标系
                        drawXAxis(painter, data.cartesian2d.xAxis, data.cartesian2d.label == "x" ? -1 : data.cartesian2d.yAxis.end.y);
                        drawYAxis(painter, data.cartesian2d.yAxis, data.cartesian2d.label == "y" ? -1 : data.cartesian2d.xAxis.end.x);

                        // 柱状图
                        drawRectBar(painter, data.series[0], props.color)

                        painter.draw();
                    }
                });
            });

        }, 200);

    }).exec();
});

</script>

<style lang="scss" scoped>
.simple-bar-container {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
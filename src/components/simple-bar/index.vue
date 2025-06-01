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
import drawCoordinate from "../../tools/coordinate";
import { BarLayout } from "vislite";

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
let barLayout = new BarLayout({});

onMounted(() => {
    uni.createSelectorQuery().in(_this).select("#" + id).boundingClientRect((nodeinfo: any) => {
        boxWidth.value = nodeinfo.width;
        boxHeight.value = nodeinfo.height;
        setTimeout(() => {

            canvasRef.value.fetch().then((painter: CanvasType) => {
                barLayout.setOption({
                    x: 50,
                    y: boxHeight.value - 50,
                    width: boxWidth.value - 100,
                    height: boxHeight.value - 100,
                    category: (props.labelType as "xAxis" | "yAxis")
                }).bind({
                    category: props.label as Array<string>,
                    data: props.data as Array<number>
                }, function (bar) {

                    // 绘制刻度尺
                    drawCoordinate(painter, bar.coordinate);

                    // 绘制矩形
                    for (let i = 0; i < bar.node.length; i++) {
                        painter.config({
                            fillStyle: props.color
                        });

                        for (let item of bar.node[i].bar) {
                            painter.fillRect(item.x, item.y, item.width, item.height);
                        }
                    }

                    painter.draw();
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
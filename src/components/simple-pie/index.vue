<template>
    <view class="simple-pie-container" :id="id">
        <UQCanvas v-if="boxWidth != 0 && boxHeight != 0" ref="canvasRef" :width="boxWidth" :height="boxHeight">
        </UQCanvas>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQSimplePie"
}
</script>
<script setup lang="ts">
import type CanvasType from "vislite/types/Canvas";

import { ref, onMounted, getCurrentInstance } from "vue";
import UQCanvas from "../canvas/index.vue";
import { default as VISLite, rotate, getLoopColors } from "vislite";
import ChartJs from "h5charts/src/chart/index";

let id = 'ui-simple-pie-' + (Math.random() * 10000).toFixed(0);
let _this = getCurrentInstance();

let props = defineProps({
    data: {
        type: Array<{
            name: string
            value: number
        }>,
        default: []
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
                let values: Array<number> = [], names = [];
                for (let item of props.data) {
                    values.push(item.value);
                    names.push(item.name);
                }

                new ChartJs({
                    grid: {
                        width: nodeinfo.width,
                        height: nodeinfo.height,
                        left: 80,
                        right: 80
                    },
                    series: [{
                        type: "pie",
                        data: values
                    }],
                    update(data) {
                        if (data.series[0] && data.series[0].type == 'pie') {
                            let serie = data.series[0], colors = getLoopColors(serie.arcs.length);

                            for (let i = 0; i < serie.arcs.length; i++) {
                                let arc = serie.arcs[i];

                                painter.config({
                                    fillStyle: colors[i]
                                }).fillArc(arc.cx, arc.cy, arc.radius[0], arc.radius[1], arc.beginDeg, arc.deg);

                                let deg = arc.beginDeg + arc.deg * 0.5, radius = Math.max(arc.radius[0], arc.radius[1]);
                                let p1 = rotate(arc.cx, arc.cy, deg, arc.cx + radius, arc.cy);
                                let p2 = rotate(arc.cx, arc.cy, deg, arc.cx + radius + 15, arc.cy);

                                let flag = p1[0] > arc.cx ? 1 : -1;

                                painter.config({
                                    strokeStyle: colors[i],
                                    lineWidth: 1.5
                                }).beginPath().moveTo(...p1).lineTo(...p2).lineTo(p2[0] + flag * 15, p2[1]).stroke();

                                painter.config({
                                    fillStyle: "#929292",
                                    textAlign: p1[0] > arc.cx ? "left" : "right",
                                    fontSize: 12,
                                    fontWeight: 400
                                }).fillText(names[i], p2[0] + flag * 20, p2[1]);

                            }

                        }
                        painter.draw();
                    }
                });
            });

        }, 200);

    }).exec();
});

</script>

<style lang="scss" scoped>
.simple-pie-container {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
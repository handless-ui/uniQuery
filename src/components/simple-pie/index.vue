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
import { PieLayout, getLoopColors } from "vislite";

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
let pieLayout = new PieLayout({});

onMounted(() => {
    uni.createSelectorQuery().in(_this).select("#" + id).boundingClientRect((nodeinfo: any) => {
        boxWidth.value = nodeinfo.width;
        boxHeight.value = nodeinfo.height;
        setTimeout(() => {
            canvasRef.value.fetch().then((painter: CanvasType) => {
                pieLayout.setOption({
                    cx: boxWidth.value * 0.5,
                    cy: boxHeight.value * 0.5,
                    radius: [0, Math.min(boxWidth.value, boxHeight.value) * 0.5 - 90]
                }).bind(props.data, function (pie) {
                    painter.clearRect(0, 0, boxWidth.value, boxHeight.value);

                    let colors = getLoopColors(pie.count);
                    for (let i = 0; i < pie.count; i++) {

                        painter.config({
                            fillStyle: colors[i]
                        }).fillArc(pie.cx, pie.cy, pie.node[i].radius[0], pie.node[i].radius[1], pie.node[i].beginDeg, pie.node[i].deg);

                        let label = pie.node[i].label;

                        painter.config({
                            strokeStyle: colors[i],
                            lineWidth: 1.5
                        }).beginPath().moveTo(label.line[0][0], label.line[0][1]).lineTo(label.line[1][0], label.line[1][1]).lineTo(label.line[2][0], label.line[2][1]).stroke();

                        painter.config({
                            fillStyle: "#929292",
                            textAlign: label.align,
                            fontSize: 12,
                            fontWeight: 400
                        }).fillText(pie.node[i].name, label.position[0], label.position[1]);

                    }

                    painter.draw();
                })

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
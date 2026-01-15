<template>
    <view class="simple-pie-container" :id="id">
        <UQCanvas @start="doit" v-if="boxWidth != 0 && boxHeight != 0" ref="canvasRef" :width="boxWidth"
            :height="boxHeight">
        </UQCanvas>

        <!-- 悬浮提示 -->
        <cover-view class="tooltip" v-if="tooltip.show" :style="{ left: tooltip.left + 'px', top: tooltip.top + 'px' }">
            <cover-view class="content" :style="{ borderColor: tooltip.color }">
                <cover-view class="icon" :style="{ backgroundColor: tooltip.color }"></cover-view>
                <cover-view class="text">{{ tooltip.name }}</cover-view>
                <cover-view class="text last">{{ tooltip.value }}</cover-view>
            </cover-view>
        </cover-view>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQSimplePie"
}
</script>
<script setup lang="ts">
import type CanvasType from "vislite/types/Canvas";
import type { PieResultType } from "vislite/types/Pie";

import { ref, onMounted, getCurrentInstance } from "vue";
import UQCanvas from "../canvas/index.vue";
import { PieLayout, getLoopColors } from "vislite";
import PointIn from 'pointin';

let id = 'ui-simple-pie-' + (Math.random() * 10000).toFixed(0);
let _this = getCurrentInstance();

let props = defineProps({
    data: {
        type: Array<{
            name: string
            value: number
        }>,
        default: []
    },
    isRing: {
        type: Boolean,
        default: false
    }
});

let boxWidth = ref(0), boxHeight = ref(0), canvasRef = ref();
let pieLayout = new PieLayout({});
let pointIn = new PointIn();
let pieValue: PieResultType;
let colors: Array<string> = [];

let tooltip = ref({
    show: false,
    name: "",
    value: 0,
    color: "",
    left: 0,
    top: 0,
});

onMounted(() => {
    uni.createSelectorQuery().in(_this).select("#" + id).boundingClientRect((nodeinfo: any) => {
        boxWidth.value = nodeinfo.width;
        boxHeight.value = nodeinfo.height;
        setTimeout(() => {
            canvasRef.value.fetch().then((painter: CanvasType) => {
                pieLayout.setOption({
                    cx: boxWidth.value * 0.5,
                    cy: boxHeight.value * 0.5,
                    radius: [props.isRing ? Math.min(boxWidth.value, boxHeight.value) * 0.25 - 45 : 0, Math.min(boxWidth.value, boxHeight.value) * 0.5 - 90]
                }).bind(props.data, function (pie) {
                    painter.clearRect(0, 0, boxWidth.value, boxHeight.value);

                    pieValue = pie;

                    colors = getLoopColors(pie.count);
                    for (let i = 0; i < pie.count; i++) {

                        painter.config({
                            fillStyle: colors[i],
                            shadowBlur: pie.node[i].isHover ? 10 : 0
                        }).fillArc(pie.cx, pie.cy, pie.node[i].radius[0], pie.node[i].radius[1], pie.node[i].beginDeg, pie.node[i].deg);

                        let label = pie.node[i].label;

                        painter.config({
                            strokeStyle: colors[i],
                            lineWidth: 1.5,
                            shadowBlur: 0
                        }).beginPath().moveTo(label.line[0][0], label.line[0][1]).lineTo(label.line[1][0], label.line[1][1]).lineTo(label.line[2][0], label.line[2][1]).stroke();

                        painter.config({
                            fillStyle: "#929292",
                            textAlign: label.align,
                            fontSize: 12,
                            fontWeight: 400
                        }).fillText(pie.node[i].name, label.position[0], label.position[1]);

                    }

                    painter.draw();
                });
            });
        }, 200);

    }).exec();
});

function doit(data: any) {
    pointIn.setPoint(data.x, data.y);

    if (pieValue) {
        for (let i = 0; i < pieValue.node.length; i++) {
            if (pointIn.arc(pieValue.cx, pieValue.cy, pieValue.radius[0], pieValue.radius[1], pieValue.node[i].beginDeg, pieValue.node[i].deg)) {
                pieLayout.setHover(i);

                // 显示悬浮框
                tooltip.value = {
                    show: true,
                    name: pieValue.node[i].name,
                    value: pieValue.node[i].value,
                    color: colors[i],
                    left: data.x > pieValue.cx ? data.x - 100 : data.x,
                    top: data.y > pieValue.cy ? data.y - 50 : data.y + 20,
                };

                return;
            }
        }
    }
    pieLayout.setHover(-1);

    // 隐藏悬浮框
    tooltip.value = {
        show: false,
        name: "",
        value: 0,
        color: "",
        left: 0,
        top: 0,
    };
}

</script>

<style lang="scss" scoped>
.simple-pie-container {
    width: 100%;
    height: 100%;
    position: relative;

    .tooltip {
        position: absolute;
        transition-duration: 300ms;
        transition-timing-function: linear;
        transition-property: all;
        pointer-events: none;

        .content {
            box-shadow: rgb(0 0 0 / 20%) 1px 2px 10px;
            border-style: solid;
            background-color: rgb(255, 255, 255);
            border-width: 1px;
            border-radius: 4px;
            color: rgb(102, 102, 102);
            padding: 10px;
            display: flex;
            align-items: center;
            white-space: nowrap;

            .icon {
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                vertical-align: top;
                margin: 0 5px;
            }

            .text {
                font-size: 14px;
                color: #666;
                font-weight: 400;

                &.last {
                    padding-left: 30px;
                    font-weight: 900;
                }
            }
        }
    }
}
</style>
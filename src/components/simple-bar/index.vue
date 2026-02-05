<template>
    <view class="simple-bar-container" :id="id">
        <UQCanvas @start="doit" v-if="boxWidth != 0 && boxHeight != 0" ref="canvasRef" :width="boxWidth"
            :height="boxHeight">
        </UQCanvas>

        <!-- 悬浮提示 -->
        <cover-view class="tooltip" v-if="tooltip.show" :style="{ left: tooltip.left + 'px', top: tooltip.top + 'px' }">
            <cover-view class="content" :style="{ borderColor: color }">
                <cover-view class="icon" :style="{ backgroundColor: color }"></cover-view>
                <cover-view class="text">{{ tooltip.name }}</cover-view>
                <cover-view class="text last">{{ tooltip.value }}</cover-view>
            </cover-view>
        </cover-view>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQSimpleBar"
}
</script>
<script setup lang="ts">
import type CanvasType from "vislite/types/Canvas";
import type { BarResultType } from "vislite/types/Bar";

import { ref, onMounted, getCurrentInstance } from "vue";
import UQCanvas from "../canvas/index.vue";
import drawCoordinate from "../../tools/coordinate";
import { BarLayout } from "vislite";
import PointIn from 'pointin';

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
let pointIn = new PointIn();
let barValue: BarResultType;

let tooltip = ref({
    show: false,
    name: "",
    value: 0,
    left: 0,
    top: 0,
});

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
                    painter.clearRect(0, 0, boxWidth.value, boxHeight.value);

                    barValue = bar;

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

function doit(data: any) {
    pointIn.setPoint(data.x, data.y);

    if (barValue) {
        for (let i = 0; i < barValue.node[0].bar.length; i++) {
            if (pointIn.rect(barValue.node[0].bar[i].x, barValue.node[0].bar[i].y, barValue.node[0].bar[i].width, barValue.node[0].bar[i].height)) {

                let name = (props.label || [])[i] as string;

                // 显示悬浮框
                tooltip.value = {
                    show: true,
                    name,
                    value: barValue.node[0].bar[i].value,
                    left: data.x > boxWidth.value * 0.5 ? data.x - 100 : data.x,
                    top: data.y > boxHeight.value * 0.5 ? data.y - 50 : data.y + 20,
                };

                return;
            }
        }
    }

    // 隐藏悬浮框
    tooltip.value = {
        show: false,
        name: "",
        value: 0,
        left: 0,
        top: 0,
    };
}

</script>

<style lang="scss" scoped>
.simple-bar-container {
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
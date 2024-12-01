<template>
    <view class="zoom-line-container" :id="id">
        <UQCanvas @start="doStart" @move="doMove" @end="doEnd" v-if="boxWidth != 0 && boxHeight != 0" ref="canvasRef"
            :width="boxWidth" :height="boxHeight">
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
import PointIn from 'pointin';
import { ruler, throttle } from "vislite";

let id = 'ui-zoom-line-' + (Math.random() * 10000).toFixed(0);
let _this = getCurrentInstance();

let props = defineProps({
    data: {
        type: Array<{
            name: string
            value: number
        }>,
        default: []
    },
    color: {
        type: String,
        default: "#e94782"
    },
    gradient: {
        type: Array<string>
    }
});

let boxWidth = ref(0), boxHeight = ref(0), canvasRef = ref();

let grid = {
    left: 55,
    top: 20,
    right: 55,
    bottom: 30
};

let zoom = {
    x: 0,
    y: 0,
    height: 26,
    width: 0,
    bottom: 10,
    beginIndex: Math.round((props.data.length - 1) * 0.3),
    endIndex: Math.round((props.data.length - 1) * 0.7)
};

let min = props.data[0].value, max = props.data[0].value;
for (let item of props.data) {
    if (item.value > max) max = item.value;
    if (item.value < min) min = item.value;
}

type EventType = {
    x: number
    y: number
}

let pointIn = new PointIn(), zoomPosition = 0, zoomHandler: "beginIndex" | "endIndex" | "" = "", handler1x = 0, handler2x = 0, zoomIndexOne = 0, zoomValueOne = 0, updateView: any = null;

let helpCache = { beginIndex: 0, endIndex: 0 };
let doStart = (event: EventType) => {
    if (!updateView) return;
    pointIn.setPoint(event.x, event.y);

    if (pointIn.rect(handler1x - 3, zoom.y, 6, zoom.height)) zoomHandler = "beginIndex";
    else if (pointIn.rect(handler2x - 3, zoom.y, 6, zoom.height)) zoomHandler = "endIndex";
    else if (pointIn.rect(handler1x, zoom.y - 7, handler2x - handler1x, 7)) {
        zoomPosition = event.x;
        helpCache.beginIndex = zoom.beginIndex;
        helpCache.endIndex = zoom.endIndex;
    }
};

let doMove = (event: EventType) => {

    // 修改边界
    if (zoomHandler) {
        let x;
        if (event.x <= zoom.x) x = 0;
        else if (event.x >= zoom.x + zoom.width) x = zoom.width;
        else x = event.x - zoom.x;

        let index = Math.round(x / zoomIndexOne);

        if (zoom[zoomHandler] != index) {
            zoom[zoomHandler] = index

            if (zoom.beginIndex > zoom.endIndex) {
                let temp = zoom.beginIndex;
                zoom.beginIndex = zoom.endIndex;
                zoom.endIndex = temp;
                zoomHandler = zoomHandler == "beginIndex" ? "endIndex" : "beginIndex";
            }
            updateView(true);
        }
    }

    // 移动
    else if (zoomPosition) {
        let indexChange = Math.round((event.x - zoomPosition) / zoomIndexOne);
        if (helpCache.beginIndex + indexChange < 0) indexChange = -helpCache.beginIndex;
        else if (helpCache.endIndex + indexChange >= props.data.length) indexChange = props.data.length - helpCache.endIndex - 1;

        zoom.beginIndex = helpCache.beginIndex + indexChange;
        zoom.endIndex = helpCache.endIndex + indexChange;
        updateView(true);
    }
};

let doEnd = (event: EventType) => {
    if (zoomHandler || zoomPosition) {
        zoomHandler = "";
        zoomPosition = 0;
        updateView(false);
    }
};

let zoomCache = "";
let getZoomBackground = (painter: CanvasType) => {
    return new Promise(resolve => {
        if (zoomCache) resolve(zoomCache)
        else {

            // 轮廓
            painter.config({
                strokeStyle: "#e8ecf6"
            }).strokeRect(zoom.x, zoom.y, zoom.width, zoom.height);

            // 内容
            painter.config({
                fillStyle: "#ebeff8",
                lineWidth: 2,
                lineJoin: "round"
            }).beginPath();
            for (let index = 0; index < props.data.length; index++) {
                let item = props.data[index];
                painter.lineTo(zoom.x + index * zoomIndexOne, zoom.y + zoom.height - zoomValueOne * (item.value - min));
            }
            painter.stroke().lineTo(zoom.x + zoom.width, zoom.y + zoom.height).lineTo(zoom.x, zoom.y + zoom.height).fill();

            painter.draw(false, () => {
                painter.toDataURL().then(url => {
                    zoomCache = url;
                    resolve(zoomCache);
                });
            });
        }
    });
};

onMounted(() => {
    uni.createSelectorQuery().in(_this).select("#" + id).boundingClientRect((nodeinfo: any) => {
        boxWidth.value = nodeinfo.width;
        boxHeight.value = nodeinfo.height;

        zoom.x = grid.left;
        zoom.y = boxHeight.value - zoom.height - zoom.bottom;
        zoom.width = boxWidth.value - grid.left - grid.right;

        zoomIndexOne = zoom.width / (props.data.length - 1);
        zoomValueOne = zoom.height / (max - min);

        setTimeout(() => {

            canvasRef.value.fetch().then((painter: CanvasType) => {

                updateView = throttle((isMoving: boolean) => {
                    painter.reset();

                    getZoomBackground(painter).then(zoomBackground => {

                        /**
                         * 绘制zoom
                         */
                        handler1x = zoom.x + zoom.beginIndex * zoomIndexOne;
                        handler2x = zoom.x + zoom.endIndex * zoomIndexOne;

                        painter.drawImage(zoomBackground as string, 0, 0, boxWidth.value, boxHeight.value).then(() => {

                            // 选中区域
                            painter.config({
                                fillStyle: "rgba(33,150,240,0.2)"
                            }).fillRect(handler1x, zoom.y, handler2x - handler1x, zoom.height);

                            // 控制移动区域
                            let hdist = handler2x - handler1x;
                            if (hdist > 20) {
                                painter.config({
                                    fillStyle: "#dfe5f3"
                                }).fillRect(handler1x, zoom.y, hdist, -7)
                                    .config({
                                        fillStyle: "white"
                                    }).fillRect(handler1x + hdist * 0.5 - 5, zoom.y - 2, 10, -3);
                            }

                            // 2个把柄
                            painter.config({
                                strokeStyle: "#bbc8e3",
                                fillStyle: "white"
                            })
                                .beginPath().moveTo(handler1x, zoom.y).lineTo(handler1x, zoom.y + zoom.height).stroke()
                                .beginPath().moveTo(handler2x, zoom.y).lineTo(handler2x, zoom.y + zoom.height).stroke()
                                .fullRect(handler1x - 3, zoom.y + 5, 6, zoom.height - 10)
                                .fullRect(handler2x - 3, zoom.y + 5, 6, zoom.height - 10);

                            // 边界文字
                            if (isMoving) {
                                painter.config({
                                    fillStyle: "#aaa",
                                    textAlign: "right",
                                    fontSize: 10
                                })
                                    .fillText(props.data[zoom.beginIndex].name, handler1x - 5, zoom.y + zoom.height * 0.5)
                                    .config({
                                        textAlign: "left"
                                    })
                                    .fillText(props.data[zoom.endIndex].name, handler2x + 5, zoom.y + zoom.height * 0.5);
                            }

                            /**
                             * 绘制折线图
                             */

                            let _min = props.data[zoom.beginIndex].value, _max = props.data[zoom.beginIndex].value;
                            for (let index = zoom.beginIndex + 1; index <= zoom.endIndex; index++) {
                                let item = props.data[index];
                                if (item.value > _max) _max = item.value;
                                if (item.value < _min) _min = item.value;
                            }

                            if (props.gradient) {
                                if (_min > 0) _min = 0;
                                if (_max < 0) _max = 0;
                            }

                            let rulerData = ruler(_max, _min, 5);
                            _min = rulerData[0];
                            _max = rulerData[rulerData.length - 1];

                            let bootomPosition = boxHeight.value - grid.bottom - zoom.bottom - zoom.height;

                            let getYByValue = (value: number) => {
                                return bootomPosition - (value - _min) / (_max - _min) * (bootomPosition - grid.top);
                            };

                            let getXByIndex = (index: number) => {
                                return grid.left + (boxWidth.value - grid.left - grid.right) * (index - zoom.beginIndex) / (zoom.endIndex - zoom.beginIndex);
                            };

                            // 绘制Y刻度尺
                            painter.config({
                                fillStyle: "#75777f",
                                strokeStyle: "#e0e6f1",
                                textAlign: "right",
                                textBaseline: "middle",
                                fontSize: 10,
                                lineWidth: 0.5
                            });
                            for (let rulerValue of rulerData) {
                                let y = getYByValue(rulerValue);
                                painter.fillText(rulerValue, grid.left - 2, y)
                                    .beginPath().moveTo(grid.left, y).lineTo(boxWidth.value - grid.right, y).stroke();
                            }

                            // 绘制X刻度尺
                            painter.config({
                                textBaseline: "top"
                            }).fillText(props.data[zoom.endIndex].name, boxWidth.value - grid.right, bootomPosition + 5)
                                .config({
                                    textAlign: "left"
                                }).fillText(props.data[zoom.beginIndex].name, grid.left, bootomPosition + 5);

                            if (props.gradient) {

                                // 绘制填充区域
                                let zeroY = getYByValue(0);
                                let deep = (zeroY - grid.top) / (bootomPosition - grid.top);
                                painter.beginPath();
                                for (let index = zoom.beginIndex; index <= zoom.endIndex; index++) {
                                    painter.lineTo(getXByIndex(index), getYByValue(props.data[index].value));
                                }
                                painter.config({
                                    fillStyle: painter.createLinearGradient(0, grid.top, 0, bootomPosition)
                                        .setColor(0, props.gradient[0])
                                        .setColor(deep, props.gradient[1])
                                        .setColor(1, props.gradient[0])
                                        .value()
                                }).lineTo(boxWidth.value - grid.right, zeroY)
                                    .lineTo(grid.left, zeroY).fill();
                            }

                            // 绘制线条
                            painter.config({
                                lineWidth: 2,
                                strokeStyle: props.color
                            }).beginPath();
                            for (let index = zoom.beginIndex; index <= zoom.endIndex; index++) {
                                painter.lineTo(getXByIndex(index), getYByValue(props.data[index].value));
                            }
                            painter.stroke();

                            painter.draw();
                        });
                    });
                }, {
                    time: 50
                });

                updateView();
            });

        }, 200);

    }).exec();
});
</script>
<style lang="scss" scoped>
.zoom-line-container {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>
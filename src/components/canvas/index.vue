<template>
    <view class="canvas-container" :id="'uni-canvas-' + uniqueid" @mousedown="doTouchstart" @mousemove="doTouchmove" @mouseup="doTouchend" @touchstart="doTouchstart" @touchmove="doTouchmove"
        @touchend="doTouchend">
        <!-- #ifdef MP-WEIXIN -->
        <canvas canvas-id="painter" :style="{ width: width + 'px', height: height + 'px' }"></canvas>
        <!-- #endif -->
        <!-- #ifdef MP-ALIPAY -->
        <canvas :id="'painter-' + uniqueid" :width="2 * width + 'px'" :height="2 * height + 'px'"
            :style="{ width: width + 'px', height: height + 'px' }"></canvas>
        <!-- #endif -->
        <!-- #ifndef MP-WEIXIN||MP-ALIPAY -->
        <canvas :canvas-id="'painter-' + uniqueid"
            :style="{ width: width + 'px', height: height + 'px', display: 'block!important' }"></canvas>
        <!-- #endif -->
    </view>

</template>
<script lang="ts">
export default {
    name: "UQCanvas"
}
</script>
<script setup lang="ts">
import type CanvasConfigType from 'vislite/types/CanvasConfig';

import { ref, getCurrentInstance } from "vue";
import { RawCanvas } from "vislite";

defineProps({
    width: {
        type: Number,
        default: 300,
    },
    height: {
        type: Number,
        default: 200,
    }
});

let uniqueid = ref((Math.random() * 10000).toFixed(0));
const instance = getCurrentInstance();

let hadFetch = false;

let emit = defineEmits(["start", "move", "end"]);
let emiteEvent = (event: any, name: "start" | "move" | "end") => {
    uni
        .createSelectorQuery()
        .selectViewport()
        .scrollOffset(() => { })
        .exec((ret: any) => {
            uni
                .createSelectorQuery()
                .in(instance)
                .select('#uni-canvas-' + uniqueid.value)
                .boundingClientRect((data: any) => {
                    emit(name, {
                        x: event.changedTouches[0].pageX - data.left - ret[0].scrollLeft,
                        y: event.changedTouches[0].pageY - data.top - ret[0].scrollTop
                    });
                })
                .exec();
        });
};

let doTouchstart = (event: any) => {
    emiteEvent(event, "start");
};

let doTouchmove = (event: any) => {
    emiteEvent(event, "move");
};

let doTouchend = (event: any) => {
    emiteEvent(event, "end");
};

defineExpose({
    fetch() {
        let painterid = '';

        // #ifdef MP-WEIXIN
        painterid = 'painter';
        // #endif
        // #ifndef MP-WEIXIN
        painterid = 'painter-' + uniqueid.value;
        // #endif

        let painter = uni.createCanvasContext(painterid, instance);

        // #ifdef MP-ALIPAY
        if (!hadFetch) painter.scale(2, 2);
        // #endif

        let scaleSize = 1;

        // #ifdef MP-ALIPAY
        scaleSize = 2;
        // #endif

        let drawPainter = new RawCanvas({
            getContext() {
                return painter;
            }
        }, null, scaleSize);

        (drawPainter as any).draw = function (reserve: boolean, callback?: Function) {
            (painter as any).draw(reserve, callback);
            return drawPainter;
        };

        (drawPainter as any).toDataURL = function () {
            return new Promise(resolve => {
                uni.canvasToTempFilePath(
                    {
                        canvasId: painterid,
                        success: function (e: any) {
                            resolve(e.tempFilePath);
                        },
                        fail: function (e: any) {
                            console.error(e);
                        },
                    },
                    // #ifndef MP-ALIPAY
                    instance,
                    // #endif
                );
            });
        };

        let drawImage = drawPainter.drawImage;
        (drawPainter as any).drawImage = function (imgUrl: string, x: number, y: number, w: number, h: number) {
            return new Promise(resolve => {

                if (/^http/.test(imgUrl)) {
                    uni.downloadFile({
                        url: imgUrl,
                        success: function (res) {
                            drawImage.call(drawPainter, res.tempFilePath, x, y, w, h, true).then(() => {
                                resolve({});
                            });
                        },
                    });
                } else {
                    drawImage.call(drawPainter, imgUrl, x, y, w, h, true).then(() => {
                        resolve({});
                    });
                }

            });
        };

        // #ifdef MP-TOUTIAO
        (drawPainter as any).config = function (configs: CanvasConfigType) {
            for (let key in configs) {
                let value = configs[key as keyof CanvasConfigType];

                if (['textAlign', 'textBaseline'].indexOf(key) > -1) {
                    (drawPainter.getContext() as any)["set" + key[0].toUpperCase() + key.substring(1)](value);
                } else {
                    (drawPainter as any).useConfig(key, value);
                }
            }
            return drawPainter;
        };
        // #endif

        hadFetch = true;
        return new Promise(resolve => {
            resolve(drawPainter);
        });
    }
});

</script>
<style lang="scss" scoped>
.canvas-container {
    display: inline-block;
}
</style>
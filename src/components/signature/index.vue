<template>
  <view class="signature-container">
    <view class="signature-canvas-container" :class="initial ? 'initial' : ''" :id="id">
      <UQCanvas @start="doStart" @move="doMove" @end="doEnd" v-if="boxWidth != 0 && boxHeight != 0" ref="canvasRef"
        :width="boxWidth" :height="boxHeight">
      </UQCanvas>
    </view>
    <view class="signature-btns-container">
      <button class="btn" @click="doReset" :plain="true">重写</button>
      <button class="btn" @click="doSave" type="primary">保存</button>
      <button class="btn" @click="doClose" type="warn">关闭</button>
    </view>
  </view>

  <!-- #ifdef MP-WEIXIN -->
  <!-- 辅助canvas -->
  <view class="help-canvas">
    <UQCanvas v-if="boxWidth != 0 && boxHeight != 0" ref="canvasBgRef" :width="boxHeight" :height="boxWidth">
    </UQCanvas>
  </view>
  <!-- #endif -->
</template>
<script lang="ts">
export default {
  name: "UQSignature"
}
</script>
<script setup lang="ts">
import type CanvasType from "vislite/types/Canvas";

import { ref, onMounted, getCurrentInstance } from "vue";
import UQCanvas from "../canvas/index.vue";

let id = 'ui-signature-' + (Math.random() * 10000).toFixed(0);
let _this = getCurrentInstance();

let boxWidth = ref(0), boxHeight = ref(0), canvasRef = ref(), canvasBgRef = ref();

let painter: CanvasType;
let isStart = false;
let initial = ref(false);

type EventType = {
  x: number
  y: number
}

let changeEvent = (event: EventType) => {
  return {
    x: event.y,
    y: boxHeight.value - event.x
  };
}

let doStart = (event: EventType) => {
  // #ifndef MP-WEIXIN
  event = changeEvent(event);
  // #endif
  if (painter) {
    isStart = true;
    painter.beginPath().moveTo(event.x, event.y);
  }
};

let doMove = (event: EventType) => {
  // #ifndef MP-WEIXIN
  event = changeEvent(event);
  // #endif
  if (painter && isStart) {
    painter.lineTo(event.x, event.y).stroke().draw(true)
    painter.moveTo(event.x, event.y);
  }
};

let doEnd = (event: EventType) => {
  // #ifndef MP-WEIXIN
  event = changeEvent(event);
  // #endif
  if (painter) {
    isStart = false;
    painter.lineTo(event.x, event.y).stroke().draw(true);
  }
};

onMounted(() => {
  uni.createSelectorQuery().in(_this).select("#" + id).boundingClientRect((nodeinfo: any) => {
    boxWidth.value = nodeinfo.width;
    boxHeight.value = nodeinfo.height;

    setTimeout(() => {
      initial.value = true;
      canvasRef.value.fetch().then((_painter: CanvasType) => {
        painter = _painter.config({
          strokeStyle: "black",
          lineWidth: 2
        });
      });
    }, 200);

  }).exec();
});

function doReset() {
  if (painter) painter.clearRect(0, 0, boxWidth.value, boxHeight.value).draw(true);
}

let emit = defineEmits(["save", "close"]);
function doSave() {
  if (painter) painter.toDataURL().then(base64 => {
    // #ifndef MP-WEIXIN
    emit("save", base64);
    // #endif

    // #ifdef MP-WEIXIN
    canvasBgRef.value.fetch().then((_painter2: CanvasType) => {
      _painter2.save();

      let ctx = _painter2.getContext() as CanvasRenderingContext2D
      ctx.translate(0, boxWidth.value)
      ctx.rotate(Math.PI * -0.5);

      _painter2.drawImage(base64, 0, 0, boxWidth.value, boxHeight.value).then(function () {
        _painter2.draw(false, function () {
          ctx.restore();

          _painter2.toDataURL().then(base64_2 => {
            emit("save", base64_2);
          });

        });

      });
    });
    // #endif
  });
}

function doClose() {
  emit("close")
}

</script>

<style lang="scss" scoped>
.signature-container {
  background-color: rgb(241 239 239);
  width: 100vw;
  overflow: hidden;

  /* #ifndef H5 */
  height: 100vh;
  /* #endif */

  /* #ifdef H5 */
  height: calc(100vh - 44px);
  /* #endif */

  .signature-canvas-container {

    /* #ifndef H5||MP-WEIXIN */
    width: calc(100vh - 20px);
    /* #endif */

    /* #ifdef H5 */
    width: calc(100vh - 44px - 20px);
    /* #endif */

    /* #ifdef MP-WEIXIN */
    height: calc(100vh - 20px);
    /* #endif */

    /* #ifndef MP-WEIXIN */
    height: calc(650rpx - 10px);
    position: relative;
     &.initial {
      background-color: white;
      transform-origin: left top;
      transform: translateX(-10px) translateY(10px) translateX(100vw) rotate(90deg);
    }
    /* #endif */

    /* #ifdef MP-WEIXIN */
    width: calc(650rpx - 10px);
    position: absolute;
    background-color: white;
    right: 10px;
    bottom: 10px;
    /* #endif */
  }

  .signature-btns-container {
    position: absolute;
    left: 0;
    top: 0;

    /* #ifndef H5 */
    width: 100vh;
    /* #endif */

    /* #ifdef H5 */
    width: calc(100vh - 44px);
    /* #endif */

    height: 100rpx;
    transform-origin: left top;
    transform: translateX(100rpx) rotate(90deg);
    display: flex;
    align-items: center;
    justify-content: space-around;

    &>.btn {
      height: 60rpx;
      line-height: 60rpx;
      font-size: 30rpx;
      padding: 0 20rpx;
    }
  }
}

/* #ifdef MP-WEIXIN */
.help-canvas {
  position: fixed;
}
/* #endif */
</style>
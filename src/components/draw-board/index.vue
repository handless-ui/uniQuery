<template>
  <view class="draw-board-container" :id="id">
    <UQCanvas @start="doStart" @move="doMove" @end="doEnd" v-if="boxWidth != 0 && boxHeight != 0" ref="canvasRef"
      :width="boxWidth" :height="boxHeight">
    </UQCanvas>
  </view>
</template>
<script lang="ts">
export default {
  name: "UQDrawBoard"
}
</script>
<script setup lang="ts">
import type CanvasType from "vislite/types/Canvas";

import { ref, onMounted, getCurrentInstance } from "vue";
import UQCanvas from "../canvas/index.vue";

let id = 'ui-draw-board-' + (Math.random() * 10000).toFixed(0);
let _this = getCurrentInstance();

let boxWidth = ref(0), boxHeight = ref(0), canvasRef = ref();

let painter: CanvasType;
let isStart = false;

type EventType = {
  x: number
  y: number
}

let doStart = (event: EventType) => {
  if (painter) {
    isStart = true;
    painter.beginPath().moveTo(event.x, event.y);
  }
};

let doMove = (event: EventType) => {
  if (painter && isStart) {
    painter.lineTo(event.x, event.y).stroke().draw(true)
    painter.moveTo(event.x, event.y);
  }
};

let doEnd = (event: EventType) => {
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
      canvasRef.value.fetch().then((_painter: CanvasType) => {
        painter = _painter.config({
          strokeStyle: "black",
          lineWidth: 2
        });
      });
    }, 200);

  }).exec();
});

defineExpose({
  toBase64() {
    return new Promise((resolve, reject) => {
      if (painter) {
        painter.toDataURL().then(base64 => {
          resolve(base64);
        });
      } else {
        reject("canvas init failed!");
      }
    });
  }
});

</script>

<style lang="scss" scoped>
.draw-board-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
<template>
  <view class="example-container">
    <view class="view">
      <ui-draw-board ref="mydrawBoardRef"></ui-draw-board>
    </view>
    <button class="example-btnbottom" type="primary" @click="toBase64">
      获取base64
    </button>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";

let mydrawBoardRef = ref();

let toBase64 = () => {

  mydrawBoardRef.value.toBase64().then((base64: string) => {
    console.log(base64)
  }).catch((err: any) => {
    // 如果出错
  });

};

</script>

<style lang="scss" scoped>
.example-container {
  padding: 50rpx;

  &>.view {
    height: 900rpx;
    border-radius: 20rpx;
    border: 1px solid gray;
  }
}
</style>
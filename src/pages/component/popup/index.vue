<template>
  <view class="example-container">
    <ui-popup :show="show" :mask="true" @click="doit()">
      <view class="demo-value" @click.stop>
        你好呀！
        <button class="example-btnbottom" @click="show = false">关闭</button>
      </view>
    </ui-popup>
    <button class="example-btnbottom" type="primary" @click="show = true">
      点击我试试
    </button>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

let show = ref(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 500);
});

let doit = () => {
  console.log("点击了popup");
};
</script>

<style lang="scss" scoped>
.example-container {
  .demo-value {
    width: 450rpx;
    line-height: 300rpx;
    text-align: center;
    display: inline-block;
    background-color: red;
    color: white;
    margin: 400rpx 150rpx;
  }
}
</style>
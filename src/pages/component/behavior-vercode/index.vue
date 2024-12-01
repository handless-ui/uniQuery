<template>
  <view class="example-container">
    <ui-behavior-vercode ref="myvercodeRef" bgicon="/static/images/nanjing.jpeg"
      righticon="/static/images/toRight.png"></ui-behavior-vercode>
    <button class="example-btnbottom" type="primary" @click="doit">
      点击我试试
    </button>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

let myvercodeRef = ref();

let doit = () => {
  myvercodeRef.value.open().then((res: any) => {
    console.log(res)
  }).catch((err: any) => {
    console.error(err);
  });
};

onMounted(() => {
  setTimeout(() => {
    doit();
  }, 500);
});
</script>

<style lang="scss" scoped>
.example-container {}
</style>
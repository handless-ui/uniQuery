<template>
  <view class="example-container">
    <ui-input-vercode ref="myInputVercodeRef" @help="doHelp()" @send="doSend()"></ui-input-vercode>

    <button class="example-btnbottom" type="primary" @click="doit">
      点击我试试
    </button>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

let myInputVercodeRef = ref<UQInputVercodeType>();

let doit = () => {
  if (myInputVercodeRef.value) myInputVercodeRef.value.open({
    phone: "13312341234"
  }).then((value: string) => {
    console.log(value)
  }).catch((err: any) => {
    console.error(err);
  });
};

let doHelp = () => {
  console.log("获得帮助！");
};

let doSend = () => {
  console.log("发送验证码！");
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
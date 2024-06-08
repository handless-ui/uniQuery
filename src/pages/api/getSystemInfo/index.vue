<template>
  <view class="example-container">
    {{ systemInfo }}
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

let systemInfo = ref("获取中......");

onMounted(() => {
  uni.$uniQuery.getSystemInfo().then(res => {
    systemInfo.value = JSON.stringify(res, null, 2);
  }).catch(err => {
    systemInfo.value = err;
  });
});
</script>

<style lang="scss" scoped>
.example-container {}
</style>
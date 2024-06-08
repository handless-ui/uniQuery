<template>
  <view class="example-container example-ul">
    <view class="example-li" v-for="(value, index) in values" :key="index">
      {{ value }} ➨ {{ uniQueryAPI("numberFormat", value) }}
    </view>
  </view>
</template>

<script setup lang="ts">
let values = [
  0, 0.1, 0.94, 0.033, 1, 12, 434, 3434, 43455, 1.23, 54.33344,
  3434.4343434,
];
</script>

<style lang="scss" scoped>
.example-container {}
</style>
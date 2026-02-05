<template>
  <view class="example-container">
    <view class="item" v-for="name of icons" :key="name">
      <ui-icon :size="100" :name="name" color="blue"></ui-icon>
      <view>{{ name }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">

let icons = ["power", "plus", "forbidden", "cross", "back"];

</script>

<style lang="scss" scoped>
.example-container {
  padding: 50rpx;

  &>.item {
    width: 150rpx;
    text-align: center;
    display: inline-block;
    font-weight: 800;
  }
}
</style>
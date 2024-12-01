<template>
  <view class="container">

    <view class="btn" @click="goto('openLocation')">
      openLocation 打开地图
    </view>

  </view>
</template>

<script setup lang="ts">
let goto = (pagename: string) => {
  uni.navigateTo({
    url: "/pages/test/" + pagename + "/index",
  });
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx;

  .btn {
    margin: 20rpx;
    font-weight: 200;
    font-size: 28rpx;

    &::before {
      display: inline-block;
      content: " ";
      border-width: 5px 7px;
      border-color: transparent transparent transparent black;
      border-style: solid;
    }
  }
}
</style>

<template>
  <view class="container">

    <!-- 图表 -->
    <view class="btn" @click="goto('simple-bar')">
      SimpleBar 简单柱状图
    </view>

    <view class="btn" @click="goto('simple-pie')">
      SimplePie 简单饼图
    </view>

    <view class="btn" @click="goto('zoom-line')">
      ZoomLine 可缩放折线图
    </view>

    <!-- 功能组件 -->
    <view class="btn" @click="goto('draw-board')">
      DrawBoard 绘板
    </view>

  </view>
</template>

<script setup lang="ts">
let goto = (pagename: string) => {
  uni.navigateTo({
    url: "/pages/visualization/" + pagename + "/index",
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

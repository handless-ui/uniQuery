<template>
  <view class="container">
    <!-- 功能组件 -->
    <view class="btn" @click="goto('form')">Form 表单校验</view>
    <view class="btn" @click="goto('popup')">Popup 弹出层</view>

    <!-- UI组件 -->
    <view class="btn" @click="goto('tabs')">Tabs 标签页</view>
    <view class="btn" @click="goto('calendar')">Calendar 日历</view>
  </view>
</template>

<script>
export default {
  methods: {
    goto(pagename) {
      uni.navigateTo({
        url: "/pages/component/" + pagename + "/index",
      });
    },
  },
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
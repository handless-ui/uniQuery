<template>
  <view class="example-container">
    <view class="example-title"> 基础用法： </view>
    <ui-tabs :list="list" @change="change"></ui-tabs>

    <view class="example-title"> 默认选中： </view>
    <ui-tabs :list="list" :index="7" @change="change"></ui-tabs>

    <view class="example-title"> 改变颜色： </view>
    <ui-tabs :list="list" :index="3" @change="change" color="pink" active-color="red"></ui-tabs>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "关注",
        "推荐",
        "电影",
        "电视剧",
        "小视频",
        "游戏",
        "校园",
        "影视",
        "音乐",
        "历史",
        "艺术",
        "数学",
        "宇宙",
        "战争",
      ],
    };
  },
  methods: {
    change(item) {
      console.log(item);
    },
  }
};
</script>

<style lang="scss" scoped>
.example-container {
  // width:650rpx;
  // margin-left: 50rpx;
}
</style>

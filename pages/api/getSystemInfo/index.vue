<template>
  <view class="example-container">
    {{ systemInfo }}
  </view>
</template>

<script>
export default {
  data() {
    return {
      systemInfo: "获取中......"
    };
  },
  onShow() {
    uni.$uniQuery.getSystemInfo().then(res => {
      this.systemInfo = JSON.stringify(res, null, 2);
    }).catch(err => {
      this.systemInfo = err;
    });
  }
};
</script>

<style lang="scss" scoped>
.example-container {}
</style>
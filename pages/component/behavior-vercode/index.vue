<template>
  <view class="example-container">
    <ui-behavior-vercode ref="myvercode" bgicon="/static/images/nanjing.jpeg"
      righticon="/static/images/toRight.png"></ui-behavior-vercode>
    <button class="example-btnbottom" type="primary" @click="doit">
      点击我试试
    </button>
  </view>
</template>
    
<script>
export default {
  onShow() {
    setTimeout(() => {
      this.doit();
    }, 500);
  },
  methods: {
    doit() {
      this.$refs.myvercode.open().then((res) => {
        console.log(res)
      }).catch((err) => {
        console.error(err);
      });
    }
  },
};
</script>
    
<style lang="scss" scoped>
.example-container {}
</style>
<template>
  <view class="example-container">
    <VISCanvas
      :region="false"
      ref="mycanvas"
      :width="width"
      :height="height"
    ></VISCanvas>
    <button class="example-btnbottom" type="primary" @click="doit">保存</button>
  </view>
</template>

<script>
import VISCanvas from "vislite/uni-app/ui-canvas.vue";

let _painter;
export default {
  data() {
    return {
      width: uni.upx2px(500),
      height: uni.upx2px(500),
    };
  },
  mounted() {
    this.$refs.mycanvas.fetch().then((painter) => {
      painter.fillCircle(this.width * 0.5, this.width * 0.5, this.width * 0.5);
      painter.draw();

      _painter = painter;
    });
  },
  methods: {
    doit() {
      _painter.toDataURL().then((imgUrl) => {
        uni.$uniQuery
          .saveAlbum(imgUrl)
          .then(() => {
            uni.showModal({
              title: "温馨提示",
              content: "保存图片到相册成功",
              showCancel: false,
            });
          })
          .catch((err) => {
            console.error(err);
            uni.showModal({
              title: "温馨提示",
              content: "保存图片到相册失败",
              showCancel: false,
            });
          });
      });
    },
  },
  components: {
    VISCanvas,
  },
};
</script>

<style lang="scss" scoped>
.example-container {
}
</style>
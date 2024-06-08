<template>
  <view class="example-container">
    <VISCanvas :region="false" ref="mycanvasRef" :width="width" :height="height"></VISCanvas>
    <button class="example-btnbottom" type="primary" @click="doit">保存</button>
  </view>
</template>

<script setup lang="ts">
import VISCanvas from "vislite/uni-app/ui-canvas.vue";
import { onMounted, ref } from "vue";

let width = uni.upx2px(500);
let height = uni.upx2px(500);

let mycanvasRef = ref();

let painter;
onMounted(() => {
  mycanvasRef.value.fetch().then((_painter) => {
    _painter.fillCircle(width * 0.5, width * 0.5, width * 0.5).draw();
    painter = _painter;
  });
});

let doit = () => {

  painter.toDataURL().then((imgUrl) => {
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
};
</script>

<style lang="scss" scoped>
.example-container {}
</style>
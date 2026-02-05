<template>
  <view class="popup-container" @touchmove.stop.prevent :style="[
    {
      opacity,
      display: display ? 'block' : 'none',
      backgroundColor: mask ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
    },
  ]" @click="doit()">
    <view v-if="lazyShow">
      <slot />
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: "UQPopup"
}
</script>
<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

let props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: Boolean,
    default: true,
  }
});

let display = ref(true), lazyShow = ref(false);
let opacity = ref(0);

let emit = defineEmits(["click"]);

let doit = () => {
  emit("click");
};

watch(() => props.show, (newVal) => {
  if (newVal) {
    display.value = true;
    nextTick(() => {
      setTimeout(() => {
        opacity.value = 1;
        lazyShow.value = true;
      });
    });
  } else {
    opacity.value = 0;
    setTimeout(() => {
      display.value = false;
      lazyShow.value = false;
    }, 300);
  }
}, {
  // 表示同时监听初始化时的props的show的意思
  immediate: true,
});
</script>

<style lang="scss" scoped>
.popup-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;

  // 修复popup相关组件在手机浏览器中显示不全问题
  // 2026年1月28日 于南京
  // height: 100vh;
  bottom: 0;

  z-index: 100;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  transition-property: opacity;
}
</style>
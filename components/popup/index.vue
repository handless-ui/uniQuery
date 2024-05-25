<template>
  <view class="popup-container" :style="[
    {
      opacity,
      display: display ? 'block' : 'none',
      backgroundColor: mask ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
    },
  ]" @click="doit()">
    <slot />
  </view>
</template>

<script>
export default {
  name: "UQPopup",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      display: false,
      opacity: 0,
    };
  },
  methods: {
    doit() {
      this.$emit("click");
    },
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.display = true;
          this.$nextTick(() => {
            setTimeout(() => {
              this.opacity = 1;
            }, 50);
          });
        } else {
          this.opacity = 0;
          setTimeout(() => {
            this.display = false;
          }, 300);
        }
      },
      // 表示同时监听初始化时的props的show的意思
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999999;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  transition-property: opacity;
}
</style>
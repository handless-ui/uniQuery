<template>
  <view class="icon-container" :style="{ width: size + 'rpx', height: size + 'rpx' }">
    <view class="view" :style="{ transform: 'scale(' + size / 100 + ')' }">
      <view :class="'box-' + name">

        <power v-if="name == 'power'" :size="size" :color="color"></power>
        <plus v-if="name == 'plus' || name == 'cross'" :size="size" :color="color"></plus>
        <forbidden v-if="name == 'forbidden'" :size="size" :color="color"></forbidden>
        <back v-if="name == 'back'" :size="size" :color="color"></back>

      </view>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  name: "UQIcon"
}
</script>
<script setup lang="ts">

import power from "./power.vue";
import plus from "./plus.vue";
import forbidden from "./forbidden.vue";
import back from "./back.vue";

defineProps({
  name: {
    type: String
  },
  size: {
    type: Number,
    default: 100
  },
  color: {
    type: String,
    default: "#000000"
  }
});

</script>
<style lang="scss" scoped>
.icon-container {
  display: inline-block;
  position: relative;

  &>.view {
    width: 100rpx;
    height: 100rpx;
    transform-origin: left top;

    &>.box- {
      &cross {
        transform: rotate(45deg);
      }
    }

  }
}
</style>
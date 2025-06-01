<template>
  <view class="tabs-container">
    <!-- 列表滚动内容 -->
    <scroll-view scroll-with-animation :show-scrollbar="false" :scroll-left="scrollLeft" :scroll-x="true"
      class="tabs-view">
      <!-- 一个个条目 -->
      <view @click="doit(index)" :class="'tabs-view-item' + (current == index ? ' active' : '')" :style="[{
      color: current == index ? activeColor : color
    }]" v-for="(item, index) in list" :key="index">
        <!-- 默认内容 -->
        <view class="content">
          {{ item }}
          <view class="line" :style="[{
      backgroundColor: activeColor
    }]"></view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script lang="ts">
export default {
  name: "UQTabs"
}
</script>
<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";

let props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  list: {
    type: Array,
    default: () => [],
    validator(value) {
      if (!Array.isArray(value)) return false;
      for (let index = 0; index < value.length; index++) {
        if (typeof value[index] !== "string") return false;
      }
      return true;
    },
  },
  activeColor: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  }
});

let _this = getCurrentInstance();

let current = ref(0);
let tabsWidth = ref(0);
let nodeInfo = ref<Array<{
  left: number
  width: number
}>>([]);
let scrollLeft = ref(0);

let emit = defineEmits(["change"]);

let doit = (index: number) => {
  current.value = index;
  emit("change", {
    index: current.value,
    value: props.list[current.value],
  });

  scrollLeft.value =
    nodeInfo.value[index].left -
    tabsWidth.value * 0.5 +
    nodeInfo.value[index].width * 0.5;
}

onMounted(() => {
  const query = uni.createSelectorQuery().in(_this);

  query.selectAll(".tabs-view").boundingClientRect((rects: any) => {
    tabsWidth.value = rects[0].width;
  });

  query
    .selectAll(".tabs-view-item")
    .boundingClientRect((rects) => {
      nodeInfo.value = rects as any;

      doit(props.index);
    })
    .exec();
});
</script>

<style lang="scss" scoped>
.tabs-container {
  width: 100%;
  position: relative;

  ::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    -webkit-appearance: none;
    background: transparent;
  }

  .tabs-view {
    white-space: nowrap;
  }

  .tabs-view-item {
    display: inline-block;
    padding: 0 10rpx;
    line-height: 50rpx;
    color: $uniquery-default-color;
    font-weight: 400;
    font-size: 28rpx;

    &.active {

      color: $uniquery-primary-color;
      &>.content {
        &>.line {
          width: 40rpx;
          height: 6rpx;
          margin-bottom: 8rpx;
          margin-left: calc(50% - 20rpx);
          border-radius: 6rpx;
          background-color: $uniquery-primary-color;
        }
      }
    }
  }
}
</style>
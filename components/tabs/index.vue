<template>
  <view class="tabs-container">
    <!-- 列表滚动内容 -->
    <scroll-view
      scroll-with-animation
      :show-scrollbar="false"
      :scroll-left="scrollLeft"
      :scroll-x="true"
      class="tabs-view"
    >
      <!-- 一个个条目 -->
      <view
        @click="doit(index)"
        :class="'tabs-view-item' + (current == index ? ' active' : '')"
        v-for="(item, index) in list"
        :key="index"
      >
        <!-- 默认内容 -->
        <view class="content">
          {{ item }}
          <view class="line"></view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "UQTabs",
  props: {
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
  },
  data() {
    return {
      current: 0,
      tabsWidth: 0,
      nodeInfo: [],
      scrollLeft: 0,
    };
  },
  mounted() {
    const query = uni.createSelectorQuery().in(this);

    query.selectAll(".tabs-view").boundingClientRect((rects) => {
      this.tabsWidth = rects[0].width;
    });

    query
      .selectAll(".tabs-view-item")
      .boundingClientRect((rects) => {
        this.nodeInfo = rects;

        this.doit(this.index);
      })
      .exec();
  },
  methods: {
    doit(index) {
      this.current = index;
      this.$emit("change", {
        index: this.current,
        value: this.list[this.current],
      });

      this.scrollLeft =
        this.nodeInfo[index].left -
        this.tabsWidth * 0.5 +
        this.nodeInfo[index].width * 0.5;
    },
  },
};
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
    color: #333;
    font-weight: 400;
    font-size: 28rpx;

    &.active {
      color: #007aff;
      & > .content {
        & > .line {
          width: 40rpx;
          height: 6rpx;
          margin-bottom: 8rpx;
          margin-left: calc(50% - 20rpx);
          border-radius: 6rpx;
          background-color: #007aff;
        }
      }
    }
  }
}
</style>
<template>
    <view class="icon_plus-container">
        <view class="line horizontal" :style="{ backgroundColor: color }"></view>
        <view class="line vertical" :style="{ backgroundColor: color }"></view>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQIconPlus"
}
</script>
<script setup lang="ts">

defineProps({
    size: {
        type: Number
    },
    color: {
        type: String
    }
});

</script>
<style lang="scss" scoped>
.icon_plus-container {
    width: 100rpx;
    height: 100rpx;
    position: relative;

    .line {
        position: absolute;
        border-radius: 5rpx;

        &.horizontal {
            width: 100rpx;
            height: 10rpx;
            top: calc(50% - 5rpx);
            left: 0;
        }

        &.vertical {
            width: 10rpx;
            height: 100rpx;
            top: 0;
            left: calc(50% - 5rpx);
        }

    }
}
</style>
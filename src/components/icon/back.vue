<template>
    <view class="icon_plus-container">
        <view class="line top" :style="{ backgroundColor: color }"></view>
        <view class="line bottom" :style="{ backgroundColor: color }"></view>
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
        transform-origin: left center;

        &.top {
            width: 70rpx;
            height: 10rpx;
            top: calc(50% - 5rpx);
            left: 20rpx;
            transform: rotate(-40deg);
        }

        &.bottom {
            width: 70rpx;
            height: 10rpx;
            top: calc(50% - 5rpx);
            left: 20rpx;
            transform: rotate(40deg);
        }

    }
}
</style>
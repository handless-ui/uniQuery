<template>
    <view class="icon_power-container" :style="{ borderColor: color + ' transparent ' + color + ' ' + color }">
        <view class="line" :style="{ backgroundColor: color }"></view>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQIconPower"
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
.icon_power-container {
    width: 100rpx;
    height: 100rpx;
    box-sizing: border-box;
    border-width: 10rpx;
    border-style: solid;
    border-radius: 50%;
    position: relative;
    transform: rotate(-90deg);

    .line {
        width: 50rpx;
        height: 10rpx;
        border-radius: 5rpx;
        position: absolute;
        top: calc(50% - 5rpx);
        right: -10rpx;
    }
}
</style>
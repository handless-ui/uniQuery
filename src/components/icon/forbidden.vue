<template>
    <view class="icon_forbidden-container" :style="{ borderColor: color }">
        <view class="line" :style="{ backgroundColor: color }"></view>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQIconForbidden"
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
.icon_forbidden-container {
    width: 100rpx;
    height: 100rpx;
    box-sizing: border-box;
    border-width: 10rpx;
    border-style: solid;
    border-radius: 50%;
    position: relative;

    .line {
        width: 100rpx;
        height: 10rpx;
        border-radius: 5rpx;
        position: absolute;
        top: calc(50% - 5rpx);
        left: -10rpx;
        transform: rotate(45deg);
    }
}
</style>
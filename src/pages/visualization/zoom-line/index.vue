<template>
    <view class="example-container">
        <view style="height: 500rpx;">
            <ui-zoom-line :data="data"></ui-zoom-line>
        </view>
        <view style="height: 500rpx;">
            <ui-zoom-line :data="data" :gradient="['rgb(255, 158, 68)', 'rgb(255, 70, 131)']"></ui-zoom-line>
        </view>
    </view>
</template>

<script setup lang="ts">
import data from "./data";
</script>

<style lang="scss" scoped>
.example-container {}
</style>
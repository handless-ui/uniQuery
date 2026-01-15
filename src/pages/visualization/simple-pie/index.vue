<template>
    <view class="example-container">
        <view style="height: 750rpx;">
            <ui-simple-pie :data="data"></ui-simple-pie>
        </view>
        <view style="height: 750rpx;">
            <ui-simple-pie :data="data" :isRing="true"></ui-simple-pie>
        </view>
    </view>
</template>

<script setup lang="ts">
let data = [
    { value: 1048, name: '搜索引擎' },
    { value: 735, name: '直接收入' },
    { value: 580, name: '邮箱' },
    { value: 484, name: '工会广告' },
    { value: 300, name: '视频广告' }
];
</script>

<style lang="scss" scoped>
.example-container {}
</style>
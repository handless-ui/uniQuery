<template>
    <view class="example-container">
        <view style="height: 500rpx;">
            <ui-simple-bar :label="axis" :data="data" label-type="xAxis"></ui-simple-bar>
        </view>
        <view style="height: 700rpx;">
            <ui-simple-bar color="red" :label="axis" :data="data" label-type="yAxis"></ui-simple-bar>
        </view>
    </view>
</template>

<script setup lang="ts">
let axis = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let data = [120, 200, 150, 80, 70, 110, 130];
</script>

<style lang="scss" scoped>
.example-container {
    padding: 40rpx;
}
</style>
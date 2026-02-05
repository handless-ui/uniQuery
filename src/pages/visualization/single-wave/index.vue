<template>
    <view class="example-container">
        <view style="height: 550rpx;">
            <ui-single-wave :value="value"></ui-single-wave>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

let value = ref(0.75);

setInterval(() => {
    value.value = Math.random();
}, 5000);

</script>

<style lang="scss" scoped>
.example-container {
    margin-top: 100rpx;
}
</style>
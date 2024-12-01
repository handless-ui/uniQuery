<template>
    <view class="example-container">
        <button class="example-btnbottom" type="primary" @click="doit">
            导航去
        </button>
    </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

let doit = () => {
    uni.openLocation({
        latitude: 38,
        longitude: 116,
        name: "我的家",
        address: "中国北京天安门"
    });
};

</script>

<style lang="scss" scoped>
.example-container {}
</style>
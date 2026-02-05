<template>
    <view class="single-wave-container" :id="id">
        <view class="circle" :style="{ transform: 'scale(' + scale + ')', backgroundColor: bgColor }">
            <view class="wave" :style="{ top: 440 * (1 - value) + 'px', backgroundColor: color }"></view>
            <view class="value" :style="{ color: fontColor }">{{ (value * 100).toFixed(0) }}%</view>
        </view>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQSingleWave"
}
</script>
<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";

let id = 'ui-single-wave-' + (Math.random() * 10000).toFixed(0);
let _this = getCurrentInstance();

let props = defineProps({
    value: {
        type: Number,
        default: 0
    },
    bgColor: {
        type: String,
        default: "#f0f8ff"
    },
    color: {
        type: String,
        default: "#00ffff"
    },
    fontColor: {
        type: String,
        default: "#000000"
    }
});

let scale = ref(1);
onMounted(() => {
    uni.createSelectorQuery().in(_this).select("#" + id).boundingClientRect((nodeinfo: any) => {
        scale.value = Math.min(nodeinfo.width, nodeinfo.height) / 400;

    }).exec();
});
</script>

<style lang="scss" scoped>
.single-wave-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0;

    .circle {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        flex-shrink: 0;

        &>.wave {
            position: absolute;
            left: calc(50% - 400px);
            width: 800px;
            height: 800px;
            border-radius: 300px;
            top: 0;
            animation: rotate_animation 10s infinite;
            transition-property: all;
            transition-duration: 2000ms;
        }

        &>.value {
            position: relative;
            line-height: 400px;
            font-size: 60px;
            text-align: center;
        }
    }
}

@keyframes rotate_animation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
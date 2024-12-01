<template>
    <image class="loading-container" :src="icon" :style="{ width: size, height: size }"></image>
</template>
<script lang="ts">
export default {
    name: "UQLoading"
}
</script>
<script setup lang="ts">
import icon from "./icon";

defineProps({
    size: {
        type: String,
        default: "100rpx"
    }
});

</script>
<style lang="scss" scoped>
.loading-container {
    animation-name: loading-amimation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(13, jump-none);

    @keyframes loading-amimation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
<template>
    <view class="title-container" v-if="h5Env != 'WeixinH5'" :style="{
        paddingTop: titleInfo.paddingTop + 'px',
        height: titleInfo.titleHeight + 'px',
    }">
        <view class="title" :style="{
            paddingTop: titleInfo.paddingTop + 'px',
            lineHeight: titleInfo.titleHeight + 'px',
            height: titleInfo.titleHeight + 'px',
            position: fixed ? 'fixed' : 'absolute',
            color,
            backgroundColor: bgColor
        }">
            <!-- #ifndef MP-TOUTIAO -->
            <view class="left" :style="{
                height: titleInfo.titleHeight + 'px'
            }" @click="clickLeft()" v-if="leftBtnType === 'back'">
                <UQIcon name="back" :color="color" :size="35"></UQIcon>
            </view>
            <!-- #endif -->
            {{ title }}
        </view>
    </view>
</template>
<script lang="ts">
export default {
    name: "UQTitle"
}
</script>
<script setup lang="ts">
import UQIcon from "../icon/index.vue";
import { ref, onMounted } from "vue";

import titleInfo from "../../tools/titleInfo";
import h5Env from "../../tools/h5Env";

defineProps({
    title: {
        type: String,
        default: '',
    },
    fixed: {
        type: Boolean,
        default: true,
    },
    color: {
        type: String,
        default: '#000000',
    },
    bgColor: {
        type: String,
        default: '#ffffff',
    }
});

let leftBtnType = ref("");
onMounted(() => {
    if (getCurrentPages().length > 1) {
        leftBtnType.value = "back"
    } else {
        leftBtnType.value = "home"
    }
})

let getHeight = () => {

    // 包含苹果的安全区域
    return uni.getSystemInfoSync().screenHeight - titleInfo.paddingTop - titleInfo.titleHeight;
};

let clickLeft = () => {

    // 返回上一页
    if (leftBtnType.value === "back") {
        uni.navigateBack({
            delta: 1,
        });
    }

};

defineExpose({
    getHeight
});
</script>

<style lang="scss" scoped>
.title-container {
    box-sizing: content-box;

    &>.title {
        top: 0;
        left: 0;
        width: 750rpx;
        box-sizing: content-box;
        text-align: center;
        z-index: 1;

        .left {
            position: absolute;
            z-index: 1;
            left: 0;
            bottom: 0;
            width: 80rpx;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
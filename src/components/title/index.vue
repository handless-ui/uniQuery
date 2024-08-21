<template>
    <view class="title-container" v-if="h5Env != 'WeixinH5'" :style="{
        paddingTop: titleInfo.paddingTop + 'px',
        height: titleInfo.titleHeight + 'px',
    }">
        <view class="title" :style="{
            paddingTop: titleInfo.paddingTop + 'px',
            lineHeight: titleInfo.titleHeight + 'px',
            position: fixed ? 'fixed' : 'absolute',
        }">
            <view class="left" @click="doBack()">
                <image :src="backicon" :style="{
                    height: titleInfo.titleHeight + 'px',
                    width: titleInfo.titleHeight + 'px',
                    verticalAlign: 'bottom'
                }" mode="aspectFit"></image>
            </view>
            {{ title }}
        </view>
    </view>
</template>

<script>
import titleInfo from '../../tools/titleInfo.js';
import h5Env from '../../tools/h5Env.js';

export default {
    name: "UQTitle",
    props: {
        title: {
            type: String,
            default: '',
        },
        fixed: {
            type: Boolean,
            default: true,
        },
        backicon: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            titleInfo,
            isLeft: false,
            h5Env,
        };
    },
    methods: {
        getHeight() {

            // 包含苹果的安全区域
            return uni.getSystemInfoSync().screenHeight - titleInfo.paddingTop - titleInfo.titleHeight;
        },
        doBack() {
            let routes = getCurrentPages()

            // 如果历史记录有页面,就是返回
            if (routes.length > 1) {
                uni.navigateBack({
                    delta: 1,
                });
            }

            // 不然
            else {
                // 什么也不干
            }

        }
    },
}
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
        color: black;
        background-color: white;

        .left {
            position: absolute;
            z-index: 1;
            left: 0;
            bottom: 0;
            width: 80rpx;
        }
    }
}
</style>../../src/tools/titleInfo.js../../src/tools/h5Env.js
<template>
    <UQPopup :show="show" @click="close()">
        <view @click.stop class="picker-container" :style="[{
        bottom,
    }]">
            <view class="title">
                请选择
            </view>
            <picker-view :value="initValue" indicator-style="height:94rpx;" class="content" @change="doChange">
                <picker-view-column v-for="(col, index) in list" :key="index">
                    <view class="item" v-for="item in col" :key="item.value">
                        {{ item.label }}
                    </view>
                </picker-view-column>
            </picker-view>
            <view class="btns">
                <view class="btn cancel" @click="close()">取消</view>
                <view class="btn submit" @click="doSubmit()">确定</view>
            </view>
        </view>
    </UQPopup>
</template>
<script lang="ts">
export default {
    name: "UQPicker"
}
</script>
<script setup lang="ts">
import UQPopup from "../popup/index.vue";
import { ref, nextTick } from "vue";

let handler = {};
let show = ref(false);
let bottom = ref("-600rpx");

let list = ref<{
    label: string,
    value: any
}[][]>([]);

// 用以初始化视图选择
let initValue = ref();

// 记录当前选择的
let cacheValue: Array<number> = [], isSingle = false;
let doChange = (event: any) => {
    cacheValue = event.detail.value;
};

let doSubmit = () => {
    let temp, tempValue = [], tempLabel = [];
    for (let index = 0; index < cacheValue.length; index++) {
        temp = list.value[index][cacheValue[index]];
        tempValue.push(temp.value);
        tempLabel.push(temp.label);
    }

    close({
        value: isSingle ? tempValue[0] : tempValue,
        label: isSingle ? tempLabel[0] : tempLabel
    });
};

let close = (value?: any) => {
    show.value = false;
    bottom.value = "-600rpx";
    if (value) {
        (handler as any).resolve(value);
    } else {
        (handler as any).reject("用户取消了选择");
    }
};

let open = (_list: Array<any>, _init?: Array<any>) => {

    if (!Array.isArray(_list[0])) {
        isSingle = true; // 标记为单列表
        _list = [_list];
    } else {
        isSingle = false;
    }
    list.value = _list;

    // 如果有初始值
    if (_init) {
        if (isSingle) _init = [_init];

        cacheValue = [];
        for (let i = 0; i < _list.length; i++) {
            for (let j = 0; j < _list[i].length; j++) {
                if (_list[i][j].value == _init[i]) {
                    cacheValue.push(j);
                    break;
                }
            }
        }
    }

    // 如果没有，默认使用第一个
    else {
        cacheValue = [];
        for (let i = 0; i < _list.length; i++) {
            cacheValue.push(0);
        }
    }
    initValue.value = cacheValue;

    // 显示出来
    show.value = true;
    nextTick(() => {
        setTimeout(() => {
            bottom.value = "0";
        }, 50);
    });

    return new Promise((resolve, reject) => {
        handler = {
            resolve,
            reject,
        };
    });
};

defineExpose({
    open
});

</script>

<style lang="scss" scoped>
.picker-container {
    width: 750rpx;
    background-color: white;
    position: absolute;
    transition-duration: 500ms;
    transition-timing-function: ease-out;
    transition-property: bottom;
    padding-bottom: calc(constant(safe-area-inset-bottom) + 20rpx);
    padding-bottom: calc(env(safe-area-inset-bottom) + 20rpx);

    &>.title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100rpx;
    }

    .content {
        height: 500rpx;

        .item {
            display: flex;
            justify-content: center;
            align-items: center
        }
    }

    &>.btns {
        text-align: center;
        margin-top: 20rpx;

        &>.btn {
            display: inline-block;
            border-radius: 10rpx;
            width: 200rpx;
            line-height: 70rpx;
            margin: 0 20rpx;
            font-size: 28rpx;

            &.cancel {
                background-color: #e8e9eb;
            }

            &.submit {
                color: white;
                background-color: #2196f3;

                &.disabled {
                    background-color: #a4cbeb;
                }
            }
        }
    }
}
</style>
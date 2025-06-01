<template>
    <UQPopup :show="show" @click="close()">
        <view @click.stop class="selector-container" :style="[{
        bottom,
    }]">
            <view class="content">
                <view class="nav">
                    <view class="item" :class="[{
        hidden: index >= deep
    }]" v-for="(label, index) in cacheLabel" :key="label" @click="updateDeep(index)">
                        {{ label }}
                    </view>
                    <view class="item active">
                        请选择
                    </view>
                </view>
                <scroll-view scroll-y="true" class="scroll">
                    <view class="item" v-for="item in list" :key="item.value" @click="updateCache(item)">
                        <view class="text">
                            {{ item.label }}
                        </view>
                        <view class="right" v-if="cacheValue[deep] == item.value">✓</view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </UQPopup>
</template>
<script lang="ts">
export default {
    name: "UQSelector"
}
</script>
<script setup lang="ts">
import UQPopup from "../popup/index.vue";
import { ref, nextTick } from "vue";

let handler = {};
let show = ref(false);
let bottom = ref("-700rpx");

let cacheValue = ref<Array<string>>([]);
let cacheLabel = ref<Array<string>>([]);

// 当前列表显示的井深
let deep = ref(0);
let updateDeep = (_deep: number) => {
    deep.value = _deep;
    updateCache();
};

let list = ref<{
    label: string,
    value: any
}[]>([]), getList: Function;

let updateCache = (item?: {
    label: string,
    value: any
}) => {

    if (item) {
        cacheValue.value[deep.value] = (item.value);
        cacheLabel.value[deep.value] = (item.label);
        deep.value += 1;
    }

    getList(cacheValue.value.slice(0, deep.value)).then((_list: Array<{
        label: string,
        value: any
    }>) => {
        if (_list) {
            list.value = _list;
        } else {
            close({
                label: cacheLabel.value.slice(0, deep.value),
                value: cacheValue.value.slice(0, deep.value)
            });
        }
    });

};

let close = (value?: any) => {
    show.value = false;
    bottom.value = "-700rpx";
    if (value) {
        (handler as any).resolve(value);
    } else {
        (handler as any).reject("用户取消了选择");
    }
};

let open = (_getList: Function, init: any = {
    value: [],
    label: []
}) => {
    getList = _getList;

    cacheValue.value = init.value;
    cacheLabel.value = init.label;
    deep.value = init.value.length == 0 ? 0 : (init.value.length - 1);

    updateCache(undefined);

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
.selector-container {
    width: 750rpx;
    background-color: white;
    position: absolute;
    transition-duration: 500ms;
    transition-timing-function: ease-out;
    transition-property: bottom;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);

    .content {
        &>.nav {
            height: 100rpx;
            border-bottom: 1px solid lighten($uniquery-default-color, 60%);
            display: flex;
            align-items: center;
            padding: 0 30rpx;

            &>.item {
                font-size: 32rpx;
                color: $uniquery-default-color;
                margin-right: 50rpx;

                &.hidden {
                    display: none;
                }

                &.active {
                    font-weight: 800;
                    position: relative;

                    &::after {
                        content: " ";
                        position: absolute;
                        width: 60rpx;
                        height: 5rpx;
                        background-color: $uniquery-primary-color;
                        border-radius: 3rpx;
                        left: 50%;
                        bottom: -15rpx;
                        transform: translateX(-50%);
                    }
                }
            }
        }

        &>.scroll {
            height: 500rpx;

            .item {
                height: 80rpx;
                padding: 0 30rpx;
                display: flex;
                align-items: center;

                &>.text {
                    font-size: 28rpx;
                    color: #333333;
                    flex-grow: 1;
                }

                &>.right {
                    color: #ffffff;
                    width: 16px;
                    line-height: 16px;
                    background-color: $uniquery-primary-color;
                    border-radius: 50%;
                    text-align: center;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
<template>
    <UQPopup :show="show" @click="close()">
        <view @click.stop class="input-vercode-container" :style="[
        {
            bottom,
        },
    ]">
            <view class="title">
                输入短信验证码
                <view class="close" @click="close()">+</view>
            </view>
            <view class="tips">
                短信验证码发送至 {{ phone }}
            </view>
            <view class="input-box" @click="openKeyboard()">
                <view v-for="(len, index) in [1, 2, 3, 4, 5, 6]" :key="index" class="item" :class="[{
        active: inputValue.length >= len,
        input: focus && inputValue.length == len - 1
    }]">
                    {{ inputValue[index] }}
                </view>
            </view>
            <view class="footer">
                <span v-if="time != 0">
                    {{ 60 - time }}s后重新发送
                </span>
                <span v-else @click="doSend()">
                    发送验证码
                </span>
                <view class="btn" @click="doHelp()">没收到验证码？</view>
            </view>
            <button :class="[{
        invalid: inputValue.length < 6
    }]" class="submit" @click="doSubmit()">确定</button>

            <!-- 辅助输入框 -->
            <input class="help-input" maxlength="6" type="number" :focus="focus" @blur="hiddenKeyboard()" v-model="inputValue" />
        </view>
    </UQPopup>
</template>
<script lang="ts">
export default {
    name: "UQInputVercode"
}
</script>
<script setup lang="ts">
import UQPopup from "../popup/index.vue";
import { ref, nextTick, onBeforeUnmount } from "vue";

let phone = ref("");
let formatPhone = (phone: string) => {
    if (phone) return phone.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1 **** $3");
    else return "";
}

let handler = {};
let show = ref(false);
let focus = ref(false);
let inputValue = ref("");
let bottom = ref("-520rpx");

let emit = defineEmits(["help", "send"]);

let doHelp = () => {
    emit("help");
};

let time = ref(0), interval: number;
let doSend = () => {
    if (time.value == 0) {
        emit("send");

        interval = setInterval(() => {
            if (time.value < 60) time.value += 1;
            else {
                if (interval) clearInterval(interval);
                time.value = 0;
            }
        }, 1000);
    }
};

let close = (value?: any) => {
    show.value = false;
    bottom.value = "-520rpx";
    inputValue.value = "";
    if (value) {
        (handler as any).resolve(value);
    } else {
        (handler as any).reject("用户取消了输入");
    }
};

onBeforeUnmount(() => {
    if (interval) clearInterval(interval);
});

let doSubmit = () => {
    if (inputValue.value && inputValue.value.length == 6) {
        close(inputValue.value);
    } else {
        uni.showModal({
            title: "温馨提示",
            content: "验证码输入非法，长度不足6位～",
            showCancel: false,
        });
    }
};

let hiddenKeyboard = () => {
    focus.value = false;
};

let openKeyboard = () => {
    focus.value = true;
};

defineExpose({
    open(config: {
        phone: string
    }) {

        phone.value = formatPhone(config.phone);
        show.value = true;

        doSend();
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
    }
});
</script>
<style lang="scss" scoped>
.input-vercode-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 750rpx;
    background-color: white;
    border-radius: 30rpx 30rpx 0 0;
    padding: 40rpx 30rpx;
    box-sizing: border-box;
    position: absolute;
    transition-duration: 500ms;
    transition-timing-function: ease-out;
    transition-property: bottom;

    &>.title {
        margin-top: 10rpx;
        line-height: 50rpx;
        position: relative;
        font-size: 36rpx;
        font-weight: 500;

        &>.close {
            transform: rotate(45deg);
            transform-origin: center center;
            line-height: 50rpx;
            width: 50rpx;
            text-align: center;
            font-size: 60rpx;
            position: absolute;
            right: 0;
            top: 0;
            font-weight: 200;
            color: gray;
        }
    }

    &>.tips {
        font-size: 28rpx;
        color: gray;
        line-height: 50rpx;
        margin-top: 10rpx;
    }

    &>.input-box {
        text-align: center;
        margin-top: 30rpx;
        white-space: nowrap;

        &>.item {
            display: inline-block;
            width: 80rpx;
            height: 80rpx;
            line-height: 80rpx;
            text-align: center;
            border: 1px solid rgb(186, 183, 183);
            border-radius: 10rpx;
            margin-left: 40rpx;
            vertical-align: top;
            box-sizing: border-box;

            &.active,
            &.input {
                border: 2px solid rgb(12, 170, 228);
            }

            &.input {
                position: relative;

                &::before {
                    content: " ";
                    width: 2px;
                    height: 50rpx;
                    position: absolute;
                    left: calc(35rpx - 1px);
                    top: 14rpx;
                    background-color: black;
                    animation: cursor-amimation 1000ms infinite;
                }
            }

            &:first-child {
                margin-left: 0;
            }
        }
    }

    &>.footer {
        position: relative;
        font-size: 26rpx;
        margin-top: 20rpx;

        &>.btn {
            position: absolute;
            right: 0;
            top: 0;
            color: rgb(81, 166, 241);
        }
    }

    &>.submit {
        margin-top: 70rpx;
        color: white;
        background-color: rgb(70, 160, 239);
        font-size: 28rpx;
        line-height: 90rpx;

        &.invalid {
            background-color: rgb(116, 182, 234);
        }
    }

    // 辅助输入框
    &>.help-input {
        position: relative;
        left: 800rpx;
        bottom: 0;
    }

    @keyframes cursor-amimation {
        from {
            background-color: black;
        }

        to {
            background-color: white;
        }
    }
}
</style>
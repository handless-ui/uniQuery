<template>
    <UQPopup :show="show" @click="close()">
        <view @click.stop class="behavior-vercode-container" :style="[
            {
                bottom,
            },
        ]">
            <view class="title">
                安全验证
            </view>
            <view class="img">
                <image class="icon" :src="bgicon"></image>
                <image class="icon" :src="shadowSrc"></image>
                <image :style="{ left: (left - val) + 'px' }" class="icon" :src="boxSrc"></image>
                <view class="icon no-show">
                    <VISCanvas ref="shadow" :region="false" :width="boxWidth" :height="boxHeight"></VISCanvas>
                </view>
                <view class="icon no-show">
                    <VISCanvas ref="box" :region="false" :width="boxWidth" :height="boxHeight"></VISCanvas>
                </view>
            </view>
            <view v-if='ok' class="ok">
                拼图验证成功
            </view>
            <view class="drag" @touchend="doCheck" v-else>

                <!-- 提示文字 -->
                <view class="tips">
                    <view class="bg" :style="{ width: (left + 20) + 'px' }"></view>
                    <text class="text">拖动滑块拼图验证</text>
                </view>

                <!-- 滑动的轨迹和块 -->
                <movable-area class="drag-area" v-if='helpInit'>
                    <movable-view direction='horizontal' @change='doDrag' class="drag-btn">
                        <image class="icon" :src="righticon"></image>
                    </movable-view>
                </movable-area>

            </view>
        </view>
    </UQPopup>
</template>
    
<script>
import UQPopup from "../popup/index";
import VISCanvas from "vislite/uni-app/ui-canvas";

let handler = {};

let width = uni.upx2px(590);
let height = uni.upx2px(222);
export default {
    name: "UQBehaviorVercode",
    props: {
        bgicon: {
            type: String,
            required: true
        },
        righticon: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            show: false,
            bottom: "-100vh",
            shadowSrc: "",
            boxSrc: "",
            left: 0,
            val: 0,
            ok: false,
            helpInit: true,
            boxWidth: width,
            boxHeight: height
        };
    },
    methods: {
        open() {

            // 显示出来
            this.show = true;
            this.$nextTick(() => {
                setTimeout(() => {
                    this.bottom = 0;
                    this.init();
                }, 50);
            });

            return new Promise((resolve, reject) => {
                handler = {
                    resolve,
                    reject,
                };
            });
        },
        close(isRight) {
            if (isRight) {
                handler.resolve("校验通过");
                this.show = false;
                this.bottom = "-100vh";
            }
        },
        init() {
            this.helpInit = false;
            setTimeout(() => {
                this.helpInit = true;
            });

            this.left = 0;
            this.ok = false;

            this.$refs.shadow.fetch().then(shadowPainter => {
                this.$refs.box.fetch().then(boxPainter => {

                    let shadow = shadowPainter.getContext();
                    let box = boxPainter.getContext();

                    let p = this.randowP();

                    shadow.fillStyle = "rgba(0,0,0,0.2)";
                    shadow.strokeStyle = '#000';
                    shadow.save();
                    this.clipPath(shadow, ...p);
                    shadow.fill();
                    shadow.stroke();
                    shadow.restore();
                    shadowPainter.draw(false, () => {
                        shadowPainter.toDataURL().then(url => {
                            this.shadowSrc = url;
                        });
                    });

                    box.setGlobalAlpha(1);
                    box.save();
                    this.clipPath(box, ...p);
                    box.clip();

                    boxPainter.drawImage(this.bgicon, 0, 0, width, height).then(() => {
                        box.restore();
                        boxPainter.draw(false, () => {
                            boxPainter.toDataURL().then(url => {
                                this.boxSrc = url;
                            });
                        });

                        this.val = p[0];
                    });

                });
            });
        },

        doCheck() {
            let dist = this.left - this.val;

            // 通过
            if (dist > -5 && dist < 5) {
                this.ok = true
                this.close(true);
            }

            // 未通过
            else {
                this.init();
                this.close(false);
            }
        },

        // 拖拽移动滑块
        doDrag(e) {
            this.left = e.detail.x;
        },

        // 生成随机的缺口位置
        randowP() {
            let x = parseInt(Math.random() * width);
            let y = parseInt(Math.random() * height);

            if (x < 70) {
                x = 70;
            } else if (x > width - 70) {
                x = width - 70;
            }
            if (y < 20) {
                y = 20;
            } else if (y > height - 70) {
                y = height - 70;
            }

            return [x, y];
        },

        // 缺口轮廓绘制
        clipPath(painter, x, y) {
            let r = 5;
            painter.beginPath();
            painter.moveTo(x, y);
            painter.arcTo(x, y - r, x + r, y - r, r);
            painter.lineTo(x + 2 * r, y - r);
            painter.arcTo(x + 2 * r, y - 2 * r, x + 3 * r, y - 2 * r, r);
            painter.arcTo(x + 4 * r, y - 2 * r, x + 4 * r, y - r, r);
            painter.lineTo(x + 5 * r, y - r);
            painter.arcTo(x + 6 * r, y - r, x + 6 * r, y, r);
            painter.lineTo(x + 6 * r, y + r);
            painter.arcTo(x + 7 * r, y + r, x + 7 * r, y + 2 * r, r);
            painter.arcTo(x + 7 * r, y + 3 * r, x + 6 * r, y + 3 * r, r);
            painter.lineTo(x + 6 * r, y + 4 * r);
            painter.arcTo(x + 6 * r, y + 5 * r, x + 5 * r, y + 5 * r, r);
            painter.lineTo(x + 4 * r, y + 5 * r);
            painter.arcTo(x + 4 * r, y + 4 * r, x + 3 * r, y + 4 * r, r);
            painter.arcTo(x + 2 * r, y + 4 * r, x + 2 * r, y + 5 * r, r);
            painter.lineTo(x + r, y + 5 * r);
            painter.arcTo(x, y + 5 * r, x, y + 4 * r, r);
            painter.lineTo(x, y + 3 * r);
            painter.arcTo(x + r, y + 3 * r, x + r, y + 2 * r, r);
            painter.arcTo(x + r, y + r, x, y + r, r);
            painter.lineTo(x, y);
            painter.closePath();
        }
    },
    components: {
        UQPopup,
        VISCanvas
    },
};
</script>
    
<style lang="scss" scoped>
.behavior-vercode-container {
    width: 630rpx;
    background-color: white;
    position: absolute;
    transition-duration: 500ms;
    transition-timing-function: ease-out;
    transition-property: bottom;
    margin-bottom: calc(50vh - 250rpx);
    margin-left: 60rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40rpx 0;
    border-radius: 10rpx;

    &>.title {
        font-size: 36rpx;
        color: #404040;
        font-weight: 400;
        margin-bottom: 20rpx;
    }

    &>.img {
        width: 590rpx;
        height: 222rpx;
        position: relative;
        overflow: hidden;

        &>.icon {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;

            &.no-show {
                left: 800rpx;
            }
        }
    }

    &>.ok {
        width: 590rpx;
        height: 80rpx;
        margin-top: 40rpx;
        background-color: #7ac23c;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 32rpx;
    }

    &>.drag {
        margin-top: 40rpx;
        height: 80rpx;
        width: 590rpx;

        .tips {
            position: absolute;
            z-index: 1;
            height: 80rpx;
            line-height: 80rpx;
            color: #666;
            font-size: 32rpx;
            width: 590rpx;
            text-align: center;

            .bg {
                background-color: #7ac23c;
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
            }

            .text {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
            }
        }

        .drag-area {
            background-color: #eee;
            height: 100%;
            width: 100%;

            .drag-btn {
                z-index: 2;
                height: 100%;
                width: 80rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                border: #ddd solid 1px;
                box-sizing: border-box;

                .icon {
                    width: 80rpx;
                    height: 100%;

                }
            }
        }
    }
}
</style>
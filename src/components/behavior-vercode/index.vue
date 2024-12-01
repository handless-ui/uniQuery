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
					<UQCanvas ref="shadowRef" :width="boxWidth" :height="boxHeight"></UQCanvas>
				</view>
				<view class="icon no-show">
					<UQCanvas ref="boxRef" :width="boxWidth" :height="boxHeight"></UQCanvas>
				</view>
			</view>
			<view v-if='ok' class="ok">
				拼图验证成功
			</view>
			<view class="drag" @touchend="doCheck" @click="doCheck" v-else>

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
<script lang="ts">
export default {
	name: "UQBehaviorVercode"
}
</script>
<script setup lang="ts">
import type CanvasType from "vislite/types/Canvas";

import UQPopup from "../popup/index.vue";
import UQCanvas from "../canvas/index.vue";
import { throttle } from "vislite";
import { ref, nextTick } from "vue";

let handler = {};

let width = uni.upx2px(590);
let height = uni.upx2px(222);

let props = defineProps({
	bgicon: {
		type: String,
		required: true
	},
	righticon: {
		type: String,
		required: true
	}
});

let righticon = props.righticon;

let show = ref(false);
let bottom = ref("-100vh");
let shadowSrc = ref("");
let boxSrc = ref("");
let left = ref(0);
let val = ref(0);
let ok = ref(false);
let helpInit = ref(true);
let boxWidth = ref(width);
let boxHeight = ref(height);

let shadowRef = ref();
let boxRef = ref();

let open = () => {

	// 显示出来
	show.value = true;
	nextTick(() => {
		setTimeout(() => {
			bottom.value = "0";
			init();
		}, 50);
	});

	return new Promise((resolve, reject) => {
		handler = {
			resolve,
			reject,
		};
	});
};
let close = (isRight: boolean = false) => {
	if (isRight) {
		(handler as any).resolve("校验通过");
		show.value = false;
		bottom.value = "-100vh";
	}
};
let init = () => {
	helpInit.value = false;
	setTimeout(() => {
		helpInit.value = true;
	});

	left.value = 0;
	ok.value = false;

	shadowRef.value.fetch().then((shadowPainter: CanvasType) => {
		boxRef.value.fetch().then((boxPainter: CanvasType) => {

			let p = randowP();

			shadowPainter.config({
				fillStyle: "rgba(0,0,0,0.2)",
				strokeStyle: '#000'
			}).save();

			clipPath(shadowPainter, p[0], p[1]);

			shadowPainter.fill()
				.stroke()
				.restore()
				.draw(false, () => {
					shadowPainter.toDataURL().then(url => {
						shadowSrc.value = url;
					});
				});

			boxPainter.save()
			clipPath(boxPainter, p[0], p[1]);
			boxPainter.clip()

				.drawImage(props.bgicon, 0, 0, width, height).then(() => {
					boxPainter.restore()
						.config({
							strokeStyle: "white"
						}).stroke()
						.draw(false, () => {
							boxPainter.toDataURL().then(url => {
								boxSrc.value = url;
							});
						});

					val.value = p[0];
				});

		});
	});
};

let doCheck = throttle(() => {
	let dist = left.value - val.value;

	// 通过
	if (dist > -5 && dist < 5) {
		ok.value = true
		close(true);
	}

	// 未通过
	else {
		init();
		close(false);
	}
});

// 拖拽移动滑块
let doDrag = (e: any) => {
	left.value = e.detail.x;
};

// 生成随机的缺口位置
let randowP = () => {
	let x = Math.random() * width;
	let y = Math.random() * height;

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
};

// 缺口轮廓绘制
let clipPath = (painter: CanvasType, x: number, y: number) => {
	let r = 5;
	painter.beginPath()
		.arc(x + r, y + r, r, Math.PI, Math.PI * 0.5)
		.arc(x + 3 * r, y, r, Math.PI, Math.PI)
		.arc(x + 5 * r, y + r, r, Math.PI * -0.5, Math.PI * 0.5)
		.arc(x + 6 * r, y + 3 * r, r, Math.PI * 1.5, Math.PI)
		.arc(x + 5 * r, y + 5 * r, r, 0, Math.PI * 0.5)
		.arc(x + 3 * r, y + 6 * r, r, 0, -Math.PI)
		.arc(x + r, y + 5 * r, r, Math.PI * 0.5, Math.PI * 0.5)
		.arc(x, y + 3 * r, r, Math.PI * 0.5, -Math.PI)
		.closePath();
};

defineExpose({
	open
});
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
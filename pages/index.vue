<template>
	<view class="container">
		<view class="logo"></view>
		<view class="tips">
			<view class="name">介绍</view>：为uniapp设计的开源组件库，专注最重要的核心组件。
		</view>
		<view class="tips">
			<view class="name">初衷</view>：让uniapp变得更好用，解决开发中常见的疑难点，加速开发。
		</view>
		<view class="tips">
			欢迎任何人贡献代码！
		</view>

		<!-- #ifdef MP-WEIXIN -->
		<ui-privacy @agree="doAgree()" @disagree="doDisagree()"></ui-privacy>
		<!-- #endif -->

	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onLoad() {},
		methods: {
			doAgree() {
				console.log("用户同意隐私授权, 接下来可以调用隐私协议中声明的隐私接口");
			},
			doDisagree() {
				console.log("用户拒绝隐私授权, 未同意过的隐私协议中的接口将不能调用");
			}
		},
	};
</script>

<style lang="scss" scoped>
	.container {
		&>.logo {
			background-image: url("@/static/logo.png");
			width: 750rpx;
			height: 200rpx;
			background-position: center;
			background-repeat: no-repeat;
			background-size: 200rpx auto;
			margin: 100rpx 0 30rpx 0;
		}

		&>.tips {
			font-size: 28rpx;
			padding: 0 100rpx;
			text-indent: 2em;
			margin-bottom: 50rpx;

			&>.name {
				display: inline-block;
				font-weight: 800;
				text-indent: 0;
			}
		}
	}
</style>
<template>
	<view class="example-container">
		<ui-form ref='myformRef' :rules='rules' :value="params">
			<ui-form-item prop='name'>
				<view class="input-item">
					<view class="label">
						姓名
					</view>
					<input v-model="params.name" placeholder="请输入您的姓名" />
				</view>
			</ui-form-item>
			<ui-form-item prop='phone'>
				<view class="input-item">
					<view class="label">
						联系方式
					</view>
					<input v-model="params.phone" placeholder="请输入您的手机号" />
				</view>
			</ui-form-item>
			<button class="example-btnbottom" type="primary" @click="doSubmit">提交</button>
		</ui-form>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

let myformRef = ref();

// 提交参数
let params = reactive({
	name: "",
	phone: ""
});

// 表单校验规则
let rules = {
	name: [{
		required: true,
		message: "请输入姓名"
	}],
	phone: [{
		required: true,
		message: "请输入手机号"
	}, {
		phone: true,
		message: "请输入正确的手机号"
	}]
};

let doSubmit = () => {
	myformRef.value.submit()

		// 如果表单合法
		.then(() => {
			uni.showToast({
				title: "表单合法了～",
				icon: 'none',
				duration: 2000
			});
		})

		// 非法的话提出提示
		.catch(error => {
			uni.showToast({
				title: error,
				icon: 'none',
				duration: 2000
			});
		});
};
</script>

<style lang="scss" scoped>
.example-container {
	.input-item {
		display: flex;
		margin-top: 50rpx;
		padding-right: 30rpx;

		&>.label {
			text-align: right;
			flex-basis: 200rpx;
			flex-shrink: 0;
			padding-right: 30rpx;
			font-size: 12px;
		}

		&>input {
			flex-grow: 1;
			border-bottom: 1px solid gray;
			font-size: 12px;
		}
	}
}
</style>
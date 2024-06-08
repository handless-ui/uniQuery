<template>
	<view class="example-container">
		<image v-for="(img, index) in imgs" :key="index" class="img" :src="img" mode="aspectFit"></image>
		<button class="example-btnbottom" type="primary" @click="doit">
			选择图片
		</button>
	</view>
</template>

<script setup lang="ts">
import { ref } from "vue";

let imgs = ref([]);

let doit = () => {
	uni.$uniQuery
		.chooseImage()
		.then((res) => {
			console.log(res);
			imgs.value = res;
		})
		.catch((err) => {
			console.error(err);
			uni.showModal({
				title: "温馨提示",
				content: "选择图片失败",
				showCancel: false,
			});
		});
};
</script>

<style lang="scss" scoped>
.example-container {}
</style>
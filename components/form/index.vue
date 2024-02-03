<template>
	<view>
		<form @submit.stop="submitForm" @reset="resetForm">
			<slot></slot>
		</form>
	</view>
</template>

<script>
	export default {
		name: 'UQForm',
		props: {
			// 表单校验规则
			rules: {
				type: Object,
				default () {
					return {}
				}
			},
			// 数据
			value: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				// 用于记录form-item
				childrens: []
			};
		},
		watch: {

			// 如果规则改变了,肯定要重新检查
			rules: {
				handler() {
					this.updateValidateItem()
				},
				deep: true
			},
			// 如果是数据改变了,也触发重新检查
			value: {
				handler() {
					this.updateValidateItem()
				},
				deep: true
			}
		},
		mounted() {
			this.updateValidateItem()
		},
		methods: {

			// 由外界触发
			submit() {

				let result = this.updateValidateItem(true)
				if (result.flag) {
					return Promise.resolve(result.msg)
				} else {
					return Promise.reject(result.msg)
				}

			},

			// 对所有的输入触发检查
			updateValidateItem(needStop = false) {

				for (let index = 0; index < this.childrens.length; index++) {
					let targetInput = this.childrens[index]

					let checkresult = targetInput.doValidateheck(
						// 方便表示值和规则
						this.value[targetInput.prop],
						this.rules[targetInput.prop]
					);
					if (needStop && !checkresult.flag) return checkresult
				}

				// 如果都通过了,表示校验通过
				return {
					flag: true,
					msg: "合法"
				}

			},

			submitForm() {},
			resetForm() {}
		},

	}
</script>
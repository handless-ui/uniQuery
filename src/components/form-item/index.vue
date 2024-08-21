<template>
	<view :class='[isValid?"ui-valid":"ui-invalid"]'>
		<slot></slot>
	</view>
</template>

<script>
	let validateServer = (value, ruleArray) => {
		
		// 一个值可能有多个规则,一个个依次检查
		for (let index in ruleArray) {

			let item = ruleArray[index]

			for (let key in item) {
				if (key in uni._uniQuery.validate) {

					// 如果非法,直接返回错误信息即可
					if (!(uni._uniQuery.validate[key](value, item[key]))) {
						return {
							flag: false,
							msg: item.message
						}
					}

				}

				// 不然的话,就是一个无效的配置项，目前选择无视，后期可以考虑是否需要提示写错了
			}

		}

		return {
			// 校验结果合法
			flag: true,
			msg: "合法"
		}
	}

	export default {
		name: 'UQFormItem',
		props: {
			prop: String,
			required: Boolean,
		},
		data() {
			return {
				isValid: true
			}
		},
		methods: {
			// 对当前的输入项进行表单校验更新
			doValidateheck(value, rule) {
				if (this.required) {
					let requiredFlag = true
					rule.forEach(item => {
						if (item.required) {
							requiredFlag = false
						}
					})
					if (requiredFlag) rule.push({
						required: true,
						message: '必输'
					})
				}
				let result = validateServer(value, rule)
				this.isValid = result.flag

				// 方便校验的结果
				return result
			},

			// 获取包含的ui-form
			getForm(name = 'UQForm') {
				let parent = this.$parent;
				let parentName = parent.$options.name
				while (parentName != name) {
					parent = parent.$parent
					if (!parent) return false
					parentName = parent.$options.name
				}
				return parent
			}
		},
		created() {
			// 先获取表单
			let form = this.getForm()

			// 然后在表单的孩子数组中登记留用
			form.childrens.push(this)

		}
	}
</script>
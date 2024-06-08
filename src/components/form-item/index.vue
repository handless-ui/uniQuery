<template>
	<view :class='[isValid ? "ui-valid" : "ui-invalid"]'>
		<slot></slot>
	</view>
</template>
<script lang="ts">
export default {
	name: "UQFormItem"
}
</script>
<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";
let validateServer = (value: any, ruleArray: Array<any>) => {

	// 一个值可能有多个规则,一个个依次检查
	for (let index in ruleArray) {

		let item = ruleArray[index];

		for (let key in item) {
			if (key in (uni as any)._uniQuery.validate) {

				// 如果非法,直接返回错误信息即可
				if (!((uni as any)._uniQuery.validate[key](value, item[key]))) {
					return {
						flag: false,
						msg: item.message
					};
				}

			}

			// 不然的话,就是一个无效的配置项，目前选择无视，后期可以考虑是否需要提示写错了
		}

	}

	return {
		// 校验结果合法
		flag: true,
		msg: "合法"
	};
};

let props = defineProps({
	prop: {
		type: String
	},
	required: {
		type: Boolean
	}
});

let _this = getCurrentInstance();

onMounted(() => {
	// 先获取表单
	let form = getForm();

	if (!(form as any).___children) {
		(form as any).___children = [];
	}
	// 然后在表单的孩子数组中登记留用
	(form as any).___children.push(_this);
});

let isValid = ref(true);

// 对当前的输入项进行表单校验更新
let doValidateCheck = (value: any, rule: any) => {
	if (props.required) {
		let requiredFlag = true
		rule.forEach((item: any) => {
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
	isValid.value = result.flag

	// 方便校验的结果
	return result
};

(_this as any).__doValidateCheck = doValidateCheck;

// 获取包含的form
let getForm = (name = 'UQForm') => {
	let parent = _this?.parent;
	let parentName = parent?.type.name;
	while (parentName !== name) {

		parent = parent?.parent;
		if (!parent) {
			return false;
		}
		parentName = parent.type.name;
	}
	return parent;
}
</script>
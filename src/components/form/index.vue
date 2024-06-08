<template>
	<view>
	  <form class="ui-form" @submit.stop="submitForm" @reset="resetForm"
		:class="[allValid ? 'ui-form-valid' : 'ui-form-invalid']">
		<slot></slot>
	  </form>
	</view>
  </template>
  <script lang="ts">
  export default {
	name: "UQForm"
  }
  </script>
  <script setup lang="ts">
  import { ref, watch, onMounted, reactive, getCurrentInstance } from "vue";
  
  let _this = getCurrentInstance();
  let props = defineProps({
	// 表单校验规则
	rules: {
	  type: Object,
	  default() {
		return {};
	  },
	},
	// 数据
	value: {
	  type: Object,
	  default() {
		return {};
	  },
	},
  });
  
  let rules = reactive(props.rules);
  let value = reactive(props.value);
  
  // 用于记录form-item
  let allValid = ref(true);
  
  // 如果规则改变了,肯定要重新检查
  watch(() => props.rules,
	(_rules) => {
	  rules = _rules;
	  updateValidateItem();
	}, { deep: true });
  
  // 如果是数据改变了,也触发重新检查
  watch(() => props.value, (_value) => {
  
	value = _value;
	let result = updateValidateItem(true);
	allValid.value = result.flag;
  }, { deep: true });
  
  onMounted(() => {
	let result = updateValidateItem(true);
	allValid.value = result.flag;
  });
  
  /**
   * 表单校验方法
   * 由外界触发
   * @returns Promise
   */
  let submit = () => {
	let result = updateValidateItem(true);
	if (result.flag) {
	  return Promise.resolve(result.msg);
	} else {
	  return Promise.reject(result.msg);
	}
  };
  
  defineExpose({
	submit
  });
  
  /**
   * 对所有的输入项触发检查
   * @returns 校验结果 { flag: boolean, msg: string}
   */
  let updateValidateItem = (needStop = false) => {
	if ((_this as any)?.___children) {
	  for (const element of (_this as any)?.___children) {
		let targetInput = element;
  
		let checkresult = targetInput.__doValidateCheck(
		  // 方便表示值和规则
		  value[targetInput.props.prop],
		  rules[targetInput.props.prop],
		  value,
		);
		if (needStop && !checkresult.flag) {
		  return checkresult;
		}
	  }
	}
	// 如果都通过了,表示校验通过
	return {
	  flag: true,
	  msg: '合法',
	};
  };
  
  let submitForm = () => { };
  let resetForm = () => { };
  </script>
  
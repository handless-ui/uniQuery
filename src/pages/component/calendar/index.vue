<template>
  <view class="example-container">
    <ui-calendar ref="mycalendarRef"></ui-calendar>

    <view class="example-title"> 有默认值： </view>
    <view class="example-btnInput" @click="doit('value1')">
      <input disabled type="text" :value="data.value1.year + '年' + data.value1.month + '月' + data.value1.day + '日'"
        placeholder="请选择日期" />
      <button>选择</button>
    </view>

    <view class="example-title"> 无默认值： </view>
    <view class="example-btnInput" @click="doit('value2')">
      <input disabled type="text" :value="data.value2
        ? data.value2.year + '年' + data.value2.month + '月' + data.value2.day + '日'
        : ''
        " placeholder="请选择日期" />
      <button>选择</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";

let mycalendarRef = ref<UQCalendarType>();

let data = reactive<any>({
  value1: {
    year: 2007,
    month: 7,
    day: 1,
  },
  value2: null,
});

let doit = (valueName: keyof typeof data) => {
  if (mycalendarRef.value) mycalendarRef.value
    .open(data[valueName])
    .then((value: any) => {
      console.log(value);
      data[valueName] = value;
    })
    .catch((err: any) => {
      console.error(err);
    });
};

onMounted(() => {
  setTimeout(() => {
    doit('value1');
  }, 500);
});

</script>

<style lang="scss" scoped>
.example-container {}
</style>
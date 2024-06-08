<template>
  <view class="example-container example-ul">
    <view class="example-li" v-for="(item, index) in values" :key="index">
      {{ item.value || "空" }} ➨
      {{ uniQueryAPI("dateFormat", item.value, item.option) }}
    </view>
  </view>
</template>

<script setup lang="ts">
let values = [
  {
    value: new Date(),
  },
  {
    value: "2022/11/22",
    option: {
      format: "yyyy年MM月",
    },
  },
  {
    value: null,
    option: {
      format: "MM月dd日 HH:mm:ss (yyyy年)",
    },
  },
  {
    value: "【日期】2033年2月14日",
    option: {
      inputFormat: "【日期】yyyy年MM月dd日",
    },
  },
];
</script>

<style lang="scss" scoped>
.example-container {}
</style>
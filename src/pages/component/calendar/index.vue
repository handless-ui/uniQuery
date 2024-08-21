<template>
  <view class="example-container">
    <ui-calendar ref="mycalendar"></ui-calendar>

    <view class="example-title"> 有默认值： </view>
    <view class="example-btnInput" @click="doit('value1')">
      <input
        readonly
        type="text"
        :value="value1.year + '年' + value1.month + '月' + value1.day + '日'"
        placeholder="请选择日期"
      />
      <button>选择</button>
    </view>

    <view class="example-title"> 无默认值： </view>
    <view class="example-btnInput" @click="doit('value2')">
      <input
        readonly
        type="text"
        :value="
          value2
            ? value2.year + '年' + value2.month + '月' + value2.day + '日'
            : ''
        "
        placeholder="请选择日期"
      />
      <button>选择</button>
    </view>
  </view>
</template>
  
<script>
export default {
  data() {
    return {
      value1: {
        year: 2007,
        month: 7,
        day: 1,
      },
      value2: null,
    };
  },
  onShow() {
    setTimeout(() => {
      this.doit('value1');
    }, 500);
  },
  methods: {
    doit(valueName) {
      this.$refs.mycalendar
        .open(this[valueName])
        .then((value) => {
          console.log(value);
          this[valueName] = value;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
  
<style lang="scss" scoped>
.example-container {
}
</style>
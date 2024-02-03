<template>
  <UQPopup :show="show" @click="close()">
    <view
      @click.stop
      class="calendar-container"
      :style="[
        {
          bottom,
        },
      ]"
    >
      <view class="title"> 日期选择 </view>
      <view class="nav">
        <view class="left btn" @click="preMonth()">上个月</view>
        <view class="center">{{ current.year }}年{{ current.month }}月</view>
        <view class="right btn" @click="nextMonth()">下个月</view>
      </view>
      <view class="top">
        <view class="item">周一</view>
        <view class="item">周二</view>
        <view class="item">周三</view>
        <view class="item">周四</view>
        <view class="item">周五</view>
        <view class="item">周六</view>
        <view class="item">周日</view>
      </view>
      <view class="list">
        <view class="bg">{{ current.month }}</view>
        <view
          :class="['item ' + day.type]"
          v-for="(day, index) in days"
          :key="index"
          @click="doSelect(day.value, day.type)"
        >
          <view
            :class="[
              'value',
              {
                active:
                  selected.year == current.year &&
                  selected.month == current.month &&
                  selected.day == day.value,
              },
              {
                today:
                  today.year == current.year &&
                  today.month == current.month &&
                  today.day == day.value,
              },
            ]"
          >
            {{ day.value }}</view
          >
        </view>
      </view>
      <view class="btns">
        <view class="btn cancel" @click="close()">取消</view>
        <view
          class="btn submit"
          :class="[
            {
              disabled: !hadSelected,
            },
          ]"
          @click="hadSelected ? close(selected) : ''"
          >确定</view
        >
      </view>
    </view>
  </UQPopup>
</template>
  
<script>
import UQPopup from "../popup/index";
import { calcDaysArray } from "../../tools/calendar";

let handler = {};
let todayObj = new Date();

export default {
  name: "UQCalendar",
  props: {},
  data() {
    return {
      show: false,
      bottom: "-840rpx",
      current: {
        year: 0,
        month: 0,
      },
      selected: {
        year: 0,
        month: 0,
        day: 0,
      },
      today: {
        year: todayObj.getFullYear(),
        month: todayObj.getMonth() + 1,
        day: todayObj.getDate(),
      },
      days: [],
    };
  },
  computed: {
    hadSelected: function () {
      return (
        this.selected.year != 0 ||
        this.selected.month != 0 ||
        this.selected.day != 0
      );
    },
  },
  methods: {
    open(initDate) {
      // 初始化当前日期
      if (initDate) {
        this.current = {
          year: initDate.year,
          month: initDate.month,
        };
        this.selected = {
          year: initDate.year,
          month: initDate.month,
          day: initDate.day,
        };
      } else {
        this.current = {
          year: this.today.year,
          month: this.today.month,
        };
      }

      this.showMonth();

      // 显示出来
      this.show = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.bottom = 0;
        }, 50);
      });
      return new Promise((resolve, reject) => {
        handler = {
          resolve,
          reject,
        };
      });
    },
    close(value) {
      this.show = false;
      this.bottom = "-840rpx";
      if (value) {
        handler.resolve(value);
      } else {
        handler.reject("用户取消了选择");
      }
    },
    doSelect(day, type) {
      if (type == "day") {
        this.selected = {
          year: this.current.year,
          month: this.current.month,
          day,
        };
      }
    },
    showMonth() {
      this.days = calcDaysArray(this.current.year, this.current.month);
    },
    preMonth() {
      if (this.current.month == 1) {
        this.current.year -= 1;
        this.current.month = 12;
      } else {
        this.current.month -= 1;
      }
      this.showMonth();
    },
    nextMonth() {
      if (this.current.month == 12) {
        this.current.year += 1;
        this.current.month = 1;
      } else {
        this.current.month += 1;
      }
      this.showMonth();
    },
  },
  components: {
    UQPopup,
  },
};
</script>
  
<style lang="scss" scoped>
$gray: rgb(207, 204, 204);

.calendar-container {
  width: 750rpx;
  background-color: white;
  position: absolute;
  transition-duration: 500ms;
  transition-timing-function: ease-out;
  transition-property: bottom;
  padding-bottom: calc(constant(safe-area-inset-bottom) + 20rpx);
  padding-bottom: calc(env(safe-area-inset-bottom) + 20rpx);
  & > .title {
    font-size: 32rpx;
    color: #303133;
    text-align: center;
    font-weight: 840;
    line-height: 80rpx;
  }
  & > .nav {
    display: flex;
    padding: 0 30rpx;
    align-items: center;
    & > .btn {
      font-size: 0;
      border-style: solid;
      border-color: transparent;
      border-width: 14rpx 20rpx;
      width: 0;
      height: 0;
      &.left {
        border-right-color: #303133;
      }
      &.right {
        border-left-color: #303133;
      }
    }
    & > .center {
      flex-grow: 1;
      text-align: center;
      font-size: 28rpx;
      color: #303133;
      font-weight: 840;
    }
  }

  & > .top,
  & > .list {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    & > .item {
      flex-basis: 14%;
      box-sizing: border-box;
      font-size: 28rpx;
    }
  }
  & > .top {
    border-bottom: 1px solid $gray;
    & > .item {
      font-weight: 840;
      font-size: 24rpx;
      padding: 20rpx 0;
    }
  }
  & > .list {
    padding: 20rpx 0;
    & > .bg {
      position: absolute;
      width: 100%;
      line-height: 500rpx;
      font-size: 240rpx;
      z-index: 0;
      color: $gray;
      font-weight: 840;
    }
    & > .item {
      position: relative;
      z-index: 1;
      padding: 10rpx 0;
      & > .value {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 10rpx;
        display: inline-block;
      }
      &.pre,
      &.next {
        color: $gray;
      }
      &.day {
        & > .value {
          &.today {
            background-color: #ffeb3b;
            font-weight: 800;
          }
          &.active {
            background-color: #2196f3;
            color: white;
          }
        }
      }
    }
  }
  & > .btns {
    text-align: center;
    margin-top: 20rpx;
    & > .btn {
      display: inline-block;
      border-radius: 10rpx;
      width: 200rpx;
      line-height: 70rpx;
      margin: 0 20rpx;
      font-size: 28rpx;

      &.cancel {
        background-color: #e8e9eb;
      }
      &.submit {
        color: white;
        background-color: #2196f3;
        &.disabled {
          background-color: #a4cbeb;
        }
      }
    }
  }
}
</style>
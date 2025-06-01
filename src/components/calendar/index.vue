<template>
  <UQPopup :show="show" @click="close()">
    <view @click.stop class="calendar-container" :style="[
      {
        bottom,
      },
    ]">
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
        <view :class="['item ' + day.type]" v-for="(day, index) in days" :key="index"
          @click="doSelect(day.value, day.type)">
          <view :class="[
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
          ]">
            {{ day.value }}</view>
        </view>
      </view>
      <view class="btns">
        <view class="btn cancel" @click="close()">取消</view>
        <view class="btn submit" :class="[
          {
            disabled: !hadSelected,
          },
        ]" @click="hadSelected ? close(selected) : ''">确定</view>
      </view>
    </view>
  </UQPopup>
</template>
<script lang="ts">
export default {
  name: "UQCalendar"
}
</script>
<script setup lang="ts">
import UQPopup from "../popup/index.vue";
import { calcDaysArray } from "../../tools/calendar";
import { ref, reactive, computed, nextTick } from "vue";

let handler = {};
let todayObj = new Date();

let show = ref(false);
let bottom = ref("-840rpx");
let current = reactive({
  year: 0,
  month: 0,
});
let selected = reactive({
  year: 0,
  month: 0,
  day: 0,
});
let today = reactive({
  year: todayObj.getFullYear(),
  month: todayObj.getMonth() + 1,
  day: todayObj.getDate(),
});
let days = ref<Array<{
  value: number
  type: string
}>>([]);

let hadSelected = computed(() => (
  selected.year != 0 ||
  selected.month != 0 ||
  selected.day != 0
));

let open = (initDate: {
  year: number,
  month: number,
  day: number
}) => {
  // 初始化当前日期
  if (initDate) {
    current = {
      year: initDate.year,
      month: initDate.month,
    };
    selected.year = initDate.year;
    selected.month = initDate.month;
    selected.day = initDate.day;
  } else {
    current = {
      year: today.year,
      month: today.month,
    };
  }

  showMonth();

  // 显示出来
  show.value = true;
  nextTick(() => {
    setTimeout(() => {
      bottom.value = "0";
    }, 50);
  });
  return new Promise((resolve, reject) => {
    handler = {
      resolve,
      reject,
    };
  });
};
let close = (value?: any) => {
  show.value = false;
  bottom.value = "-840rpx";
  if (value) {
    (handler as any).resolve(value);
  } else {
    (handler as any).reject("用户取消了选择");
  }
};
let doSelect = (day: number, type: string) => {
  if (type == "day") {
    selected.year = current.year;
    selected.month = current.month;
    selected.day = day;
  }
};
let showMonth = () => {
  (days as any).value = calcDaysArray(current.year, current.month);
};
let preMonth = () => {
  if (current.month == 1) {
    current.year -= 1;
    current.month = 12;
  } else {
    current.month -= 1;
  }
  showMonth();
};
let nextMonth = () => {
  if (current.month == 12) {
    current.year += 1;
    current.month = 1;
  } else {
    current.month += 1;
  }
  showMonth();
};

defineExpose({
  open
});
</script>

<style lang="scss" scoped>
$gray: lighten($uniquery-default-color, 60%);

.calendar-container {
  width: 750rpx;
  background-color: white;
  position: absolute;
  transition-duration: 500ms;
  transition-timing-function: ease-out;
  transition-property: bottom;
  padding-bottom: calc(constant(safe-area-inset-bottom) + 20rpx);
  padding-bottom: calc(env(safe-area-inset-bottom) + 20rpx);

  &>.title {
    font-size: 32rpx;
    color: $uniquery-default-color;
    text-align: center;
    font-weight: 840;
    line-height: 80rpx;
  }

  &>.nav {
    display: flex;
    padding: 0 30rpx;
    align-items: center;

    &>.btn {
      font-size: 0;
      border-style: solid;
      border-color: transparent;
      border-width: 14rpx 20rpx;
      width: 0;
      height: 0;

      &.left {
        border-right-color: $uniquery-default-color;
      }

      &.right {
        border-left-color: $uniquery-default-color;
      }
    }

    &>.center {
      flex-grow: 1;
      text-align: center;
      font-size: 28rpx;
      color: $uniquery-default-color;
      font-weight: 840;
    }
  }

  &>.top,
  &>.list {
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    &>.item {
      flex-basis: 14%;
      box-sizing: border-box;
      font-size: 28rpx;
    }
  }

  &>.top {
    border-bottom: 1px solid $gray;

    &>.item {
      font-weight: 840;
      font-size: 24rpx;
      padding: 20rpx 0;
    }
  }

  &>.list {
    padding: 20rpx 0;

    &>.bg {
      position: absolute;
      width: 100%;
      line-height: 500rpx;
      font-size: 240rpx;
      z-index: 0;
      color: $gray;
      font-weight: 840;
    }

    &>.item {
      position: relative;
      z-index: 1;
      padding: 10rpx 0;

      &>.value {
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
        &>.value {
          &.today {
            background-color: $uniquery-warning-color;
            font-weight: 800;
          }

          &.active {
            background-color: $uniquery-primary-color;
            color: white;
          }
        }
      }
    }
  }

  &>.btns {
    text-align: center;
    margin-top: 20rpx;

    &>.btn {
      display: inline-block;
      border-radius: 10rpx;
      width: 200rpx;
      line-height: 70rpx;
      margin: 0 20rpx;
      font-size: 28rpx;

      &.cancel {
        background-color: lighten($uniquery-default-color, 70%);
      }

      &.submit {
        color: white;
        background-color: lighten($uniquery-primary-color, 10%);

        &.disabled {
          background-color: lighten($uniquery-primary-color, 20%);
        }
      }
    }
  }
}
</style>
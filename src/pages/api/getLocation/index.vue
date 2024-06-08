<template>
  <view class="example-container">
    <view class="example-title"> 经纬度： </view>
    <view class="example-btnInput" @click="doit">
      <input
        readonly
        type="text"
        v-model="value"
        placeholder="请获取位置"
      />
      <button>获取</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import {ref} from "vue";

let value=ref("");

    let doit=()=> {
      uni.$uniQuery
        .getLocation()
        .then((res) => {
          value.value = "经度:" + res.longitude + " 纬度:" + res.latitude;
        })
        .catch((err) => {
          console.error(err);
        });
    };
</script>

<style lang="scss" scoped>
.example-container {
}
</style>
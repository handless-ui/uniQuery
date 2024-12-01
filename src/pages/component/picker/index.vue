<template>
    <view class="example-container">
        <ui-picker ref="mypickerRef"></ui-picker>

        <view class="example-title"> 单列： </view>
        <view class="example-btnInput" @click="doit1()">
            <input readonly type="text" :value="value1?.label" placeholder="请选择科目" />
            <button>选择</button>
        </view>

        <view class="example-title"> 多列： </view>
        <view class="example-btnInput" @click="doit2()">
            <input readonly type="text" :value="value2?.label.join(' ')" placeholder="请选择科目" />
            <button>选择</button>
        </view>

    </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { subjects, times } from "./data";

let mypickerRef = ref();

let value1 = ref();
let doit1 = () => {
    mypickerRef.value.open(subjects, value1.value?.value).then((value: any) => {
        console.log(value);
        value1.value = value;
    }).catch((err: any) => {
        console.error(err);
    });
};


let value2 = ref();
let doit2 = () => {
    mypickerRef.value.open(times, value2.value?.value).then((value: any) => {
        console.log(value);
        value2.value = value;
    }).catch((err: any) => {
        console.error(err);
    });
};

onMounted(() => {
    setTimeout(() => {
        doit1();
    }, 500);
});

</script>

<style lang="scss" scoped>
.example-container {}
</style>
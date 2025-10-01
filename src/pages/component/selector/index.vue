<template>
    <view class="example-container">
        <ui-selector ref="myselectorRef"></ui-selector>
        
        <view class="example-btnInput" @click="doit1()">
            <input readonly type="text" :value="value1?.label.join(' / ')" placeholder="请选择位置" />
            <button>选择</button>
        </view>
    </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getSSQItems } from "./data";

let myselectorRef = ref();

let value1 = ref();
let doit1 = () => {
    myselectorRef.value.open(getSSQItems, value1.value).then((value: any) => {
        console.log(value);
        value1.value = value;
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
<template>
  <ui-signature @save="doSave"></ui-signature>
</template>
<script setup lang="ts">

let doSave = (event: any) => {
  console.log(event)
}

</script>

<style lang="scss" scoped></style>
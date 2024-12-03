<script setup>
const isLoading = ref(false);
function openLoading() {
  // 開啟讀取效果
  isLoading.value = true;
  setTimeout(() => {
    // 關閉讀取效果
    isLoading.value = false;
  }, 2000);
}
</script>

<template>
  <ClientOnly>
    <loading v-model:active="isLoading"
          :can-cancel="true"
          :on-cancel="onCancel"
          :is-full-page="fullPage"/>
  </ClientOnly>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>

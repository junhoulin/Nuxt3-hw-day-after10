<script setup>
const pureColor = ref("red");
const gradientColor = ref(
  "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
);
</script>

<template>
  <ClientOnly>
    <ColorPicker
      v-model:pureColor="pureColor"
      v-model:gradientColor="gradientColor"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const layoutStore = useLayoutStore();
const { layoutType } = storeToRefs(layoutStore);
</script>

<template>
  <AppVerticalLayout v-if="layoutType === 'vertical'">
    <slot />
  </AppVerticalLayout>

  <AppHorizontalLayout v-else>
    <slot />
  </AppHorizontalLayout>
</template>

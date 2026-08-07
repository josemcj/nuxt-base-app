<script setup lang="ts">
const layoutStore = useLayoutStore();
const { layoutType } = storeToRefs(layoutStore);
</script>

<template>
  <LayoutVerticalLayout v-if="layoutType === 'vertical'">
    <slot />
  </LayoutVerticalLayout>

  <LayoutHorizontalLayout v-else>
    <slot />
  </LayoutHorizontalLayout>
</template>

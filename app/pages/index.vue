<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'Dashboard',
  description: 'Panel principal',
});

const breadcrumbItems = [
  {
    text: 'Dashboard',
    active: true,
  },
];
</script>

<template>
  <PageHeader title="Dashboard" :items="breadcrumbItems" />
</template>

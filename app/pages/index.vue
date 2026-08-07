<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <main class="container py-5">
    <h1>Skote con Nuxt</h1>

    <button type="button" class="btn btn-primary" @click="appStore.toggleSidebar">
      Sidebar: {{ appStore.sidebarCollapsed ? 'cerrado' : 'abierto' }}
    </button>
  </main>
</template>

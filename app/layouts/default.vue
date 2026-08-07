<script setup lang="ts">
const layoutStore = useLayoutStore();

const { layoutWidth, loader, topbar } = storeToRefs(layoutStore);

const menuOpen = ref(false);

useHead(() => ({
  bodyAttrs: {
    'data-layout': 'horizontal',
    'data-topbar': topbar.value,
    'data-layout-size': layoutWidth.value === 'boxed' ? 'boxed' : null,
  },
}));

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <div>
    <div v-if="loader" id="preloader">
      <div id="status">
        <div class="spinner-chase">
          <div v-for="index in 6" :key="index" class="chase-dot" />
        </div>
      </div>
    </div>

    <div id="layout-wrapper">
      <AppHeader :menu-open="menuOpen" @toggle-menu="toggleMenu" />
      <AppHorizontalNav :open="menuOpen" @close="menuOpen = false" />

      <div class="main-content">
        <div class="page-content">
          <BContainer fluid>
            <slot />
          </BContainer>
        </div>

        <AppFooter />
      </div>
    </div>
  </div>
</template>

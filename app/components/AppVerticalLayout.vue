<script setup lang="ts">
const layoutStore = useLayoutStore();
const route = useRoute();

const { layoutWidth, leftSidebarType, loader, topbar } = storeToRefs(layoutStore);

const sidebarEnabled = ref(false);
const menuCondensed = ref(false);

const bodyClasses = computed(() => ({
  'sidebar-enable': sidebarEnabled.value,
  'vertical-collpsed': menuCondensed.value || leftSidebarType.value === 'icon',
}));

const bodyAttributes = computed(() => {
  const sidebarType = leftSidebarType.value;
  const width = layoutWidth.value;

  return {
    'data-topbar': sidebarType === 'light' ? topbar.value : null,

    'data-sidebar': sidebarType === 'light' ? null : sidebarType,

    'data-sidebar-size': sidebarType === 'compact' ? 'small' : null,

    'data-keep-enlarged': sidebarType === 'icon' ? 'true' : null,

    'data-layout-size': width === 'boxed' ? 'boxed' : null,

    'data-layout-scrollable': width === 'scrollable' ? 'true' : null,

    'data-layout-mode': width === 'fluid' ? 'fluid' : null,
  };
});

useHead(() => ({
  bodyAttrs: {
    ...bodyAttributes.value,
    class: bodyClasses.value,
  },
}));

function toggleMenu() {
  if (!import.meta.client) {
    return;
  }

  if (window.innerWidth >= 992) {
    menuCondensed.value = !menuCondensed.value;
    sidebarEnabled.value = false;
    return;
  }

  sidebarEnabled.value = !sidebarEnabled.value;
  menuCondensed.value = false;
}

watch(
  () => route.fullPath,
  () => {
    sidebarEnabled.value = false;
  },
);
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
      <AppVerticalHeader @toggle-menu="toggleMenu" />

      <AppSidebar />

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

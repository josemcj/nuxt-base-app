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
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            <div class="navbar-brand-box">
              <NuxtLink to="/" class="logo logo-dark">
                <span class="logo-sm">
                  <img src="~/assets/images/logo.svg" alt="Skote theme" height="22" />
                </span>

                <span class="logo-lg">
                  <img src="~/assets/images/logo.svg" alt="Skote theme" height="34" />
                </span>
              </NuxtLink>

              <NuxtLink to="/" class="logo logo-light">
                <span class="logo-sm">
                  <img src="~/assets/images/logo-light.svg" alt="Skote theme" height="22" />
                </span>

                <span class="logo-lg">
                  <img src="~/assets/images/logo-light.svg" alt="Skote theme" height="34" />
                </span>
              </NuxtLink>
            </div>

            <button
              type="button"
              class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              aria-label="Mostrar u ocultar navegación"
              :aria-expanded="menuOpen"
              @click="toggleMenu">
              <i class="fa fa-fw fa-bars" />
            </button>
          </div>

          <div class="d-flex align-items-center">
            <span class="d-none d-sm-inline-block">Skote theme</span>
          </div>
        </div>
      </header>

      <div class="topnav">
        <BContainer fluid>
          <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
            <div id="topnav-menu-content" class="collapse navbar-collapse" :class="{ show: menuOpen }">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NuxtLink to="/" class="nav-link" @click="menuOpen = false">
                    <i class="bx bx-home-circle me-2" />
                    Dashboard
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </nav>
        </BContainer>
      </div>

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

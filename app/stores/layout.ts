import type { LayoutState } from '~/types/layouts';

export const useLayoutStore = defineStore('layout', {
  state: (): LayoutState => ({
    layoutType: 'vertical',
    layoutWidth: 'fluid',
    leftSidebarType: 'dark',
    topbar: 'dark',
    loader: false,
  }),

  actions: {
    changeLayoutType(layoutType: LayoutState['layoutType']) {
      this.layoutType = layoutType;
    },

    changeLayoutWidth(layoutWidth: LayoutState['layoutWidth']) {
      this.layoutWidth = layoutWidth;
    },

    changeLeftSidebarType(leftSidebarType: LayoutState['leftSidebarType']) {
      this.leftSidebarType = leftSidebarType;
    },

    changeTopbar(topbar: LayoutState['topbar']) {
      this.topbar = topbar;
    },

    changeLoaderValue(loader: boolean) {
      this.loader = loader;
    },
  },
});

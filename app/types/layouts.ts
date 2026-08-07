export interface LayoutState {
  layoutType: 'horizontal' | 'vertical';
  layoutWidth: 'fluid' | 'boxed';
  leftSidebarType: 'dark' | 'light';
  topbar: 'dark' | 'light';
  loader: boolean;
}

export interface HorizontalMenuItem {
  id: number;
  label: string;
  icon?: string;
  link?: string;
  parentId?: number;
  subItems?: HorizontalMenuItem[];
}

export interface MenuItemBadge {
  variant: 'success' | 'danger' | 'warning' | 'info' | string;
  text: string;
}

export interface VerticalMenuItem extends HorizontalMenuItem {
  isTitle?: boolean;
  badge?: MenuItemBadge;
  subItems?: VerticalMenuItem[];
}

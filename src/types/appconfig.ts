import * as vue from "vue";
import type { SVGAttributes } from "vue";
interface LucideProps extends Partial<SVGAttributes> {
  size?: 24 | number;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}

export interface SidebarItem {
  title: string;
  isActive: boolean;
  to: string;
  icon: vue.FunctionalComponent<LucideProps, {}, any, {}>;
  items: SidebarItem[];
}

export interface SidebarItems {
  header: string;
  headerIcon: vue.FunctionalComponent<LucideProps, {}, any, {}>;
  items: SidebarItem[];
}

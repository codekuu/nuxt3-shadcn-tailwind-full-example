import * as vue from "vue";
import type { SVGAttributes } from "vue";
interface LucideProps extends Partial<SVGAttributes> {
  size?: 24 | number;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}

export interface Application {
  name: string;
  icon: vue.FunctionalComponent<LucideProps, {}, any, {}>;
  plan: string;
}

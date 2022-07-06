/* eslint-disable */
import { VueConstructor } from "vue";

declare module "vue" {
  export interface GlobalComponents {
    "f-icon": VueConstructor<
      {
        state: "primary" | "success" | "warning";
      } & Vue
    >;
  }
}

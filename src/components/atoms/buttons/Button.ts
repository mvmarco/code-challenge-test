import { ComponentPropsWithRef } from "react";

export type ButtonSizes = "large" | "small";
type ButtonOptions = "normal" | "danger";

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  size?: ButtonSizes;
  option?: ButtonOptions;
};

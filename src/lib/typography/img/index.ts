import Img from "./Img.svelte";
import type { HTMLImgAttributes } from "svelte/elements";
import { img } from "./theme";

type SizeType = "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "xs" | "full" | undefined;
type AlignmentType = "left" | "center" | "right" | undefined;
type EffectType = "none" | "grayscale" | "blur" | "invert" | "sepia" | "saturate" | "hue-rotate" | undefined;
type ShadowType = "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "regular" | "inner" | undefined;
type RoundedType = "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none" | "regular" | "3xl" | undefined;

interface ImgProps extends HTMLImgAttributes {
  size?: SizeType;
  alignment?: AlignmentType;
  effect?: EffectType;
  shadow?: ShadowType;
  rounded?: RoundedType;
  caption?: string;
  imgClass?: string;
  figClass?: string;
  captionClass?: string;
  class?: string;
  href?: string;
}

export { Img, img, type ImgProps };

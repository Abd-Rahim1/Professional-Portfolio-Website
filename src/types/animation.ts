// animation.ts
export type AnimationVariants = {
  hidden: {
    opacity: number;
    y?: number;
    scale?: number;
    rotate?: number;
    x?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    scale?: number;
    rotate?: number;
    x?: number;
    transition: {
      duration: number;
      ease?: string;
      type?: string;
      stiffness?: number;
      damping?: number;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
};

export type AnimationConfig = {
  variants?: AnimationVariants;
  initial?: keyof AnimationVariants;
  animate?: keyof AnimationVariants;
  whileInView?: keyof AnimationVariants;
};
import { forwardRef, ComponentProps } from "react";

import styles from "./styles.module.css";

type ButtonVariant = "contained" | "outline";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  contained: "",
  outline: styles.outlineButton,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "contained", ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={`${props.className} ${styles.buttonContainer} ${variants[variant]}`}
    />
  )
);

Button.displayName = "Button";

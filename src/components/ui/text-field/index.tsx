import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

import styles from "./styles.module.css";

export const TextField = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  (props, ref) => (
    <div className={styles.textFieldWrapper}>
      <input
        {...props}
        ref={ref}
        className={clsx(props.className, styles.textFieldContainer)}
      />
    </div>
  )
);

TextField.displayName = "TextField";

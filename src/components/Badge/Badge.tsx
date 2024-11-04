import React, {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import clsx from "clsx";

const colorClasses = {
  neutral: "bg-gray-50 text-neutral-600 border-neutral-200",
  error: "bg-red-50 text-red-600 border-red-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  success: "bg-green-50 text-green-700 border-green-200",
  brand: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const sizeClasses = {
  sm: "text-xs px-1.5 py-0.5",
  md: "text-sm px-2 py-0.5",
  lg: "text-sm px-2.5 py-1",
};

export interface BadgeProps extends ComponentProps<"span"> {
  /** @default sm */
  size?: "sm" | "md" | "lg";
  /** @default neutral */
  color?: "neutral" | "error" | "warning" | "success" | "brand";
  children: ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (props: BadgeProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const { children, color = "neutral", size = "sm", ...restProps } = props;

    return (
      <span
        ref={ref}
        className={clsx(
          "rounded-full border border-solid w-fit",
          sizeClasses[size],
          colorClasses[color]
        )}
        {...restProps}
      >
        {children}
      </span>
    );
  }
);

export default Badge;

import React from "react";
import clsx from "clsx";

interface IButton {
    icon?: React.ReactNode;
    isTransparent?: boolean;
    isFullWidth?: boolean;
    size?: "large" | "medium" | "small";
}

export const Button: React.FC<IButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    size = "medium",
    isTransparent,
    isFullWidth,
    icon,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={clsx(
                "button",
                `button--${size}`,
                isTransparent && "button--transparent",
                isFullWidth && "button--fullwidth"
            )}
        >
            {icon && icon}
            {children}
        </button>
    );
};

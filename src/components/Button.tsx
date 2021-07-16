import React from "react";
import clsx from "clsx";

interface IButton {
    icon?: React.ReactNode;
    isAddIcon?: boolean;
    isAddCategoryIcon?: boolean;
    isDeleteIcon?: boolean;
}

export const Button: React.FC<IButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    isAddIcon,
    isAddCategoryIcon,
    isDeleteIcon,
    icon,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={clsx(
                "button",
                isAddIcon && "button--add",
                isAddCategoryIcon && "button--add-category",
                isDeleteIcon && "button--delete"
            )}
        >
            {icon && icon}
            {children}
        </button>
    );
};

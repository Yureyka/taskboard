import clsx from "clsx";
import React from "react";

interface ITextField {
    value: string;
    className?: string;
    onChange: (title: string) => void;
}

export const TextField: React.FC<ITextField> = ({ className, value, onChange, ...props }) => {
    return (
        <input
            value={value}
            className={clsx("text-field", className)}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            placeholder="Введите название"
        />
    );
};

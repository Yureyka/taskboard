import React from "react";

export const PlusIcon: React.FC<{
    color?: string;
    width?: number;
    height?: number;
}> = ({ color = "#fff", width = 25, height = 19 }) => (
    <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path
            d="M12 23V12M12 12V1M12 12H23M12 12H1"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

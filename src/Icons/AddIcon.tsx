import React from "react";

export const AddIcon: React.FC<{
    color?: string;
    width?: number;
    height?: number;
}> = ({ color = "#fff", width = 25, height = 19 }) => (
    <svg width={width} height={height} fill={color} viewBox="0 0 17 17">
        <path
            d="M8.5 16V8.5M8.5 8.5V1M8.5 8.5H16M8.5 8.5H1"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

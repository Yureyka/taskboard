import React from "react";

export const TrashIcon: React.FC<{
    color?: string;
    width?: number;
    height?: number;
}> = ({ color = "#fff", width = 25, height = 19 }) => (
    <svg width={width} height={height} fill={color} viewBox="0 0 9 10">
        <path d="M8.438.625H6.094L5.91.26A.469.469 0 005.49 0H3.258a.463.463 0 00-.418.26l-.184.365H.312A.312.312 0 000 .937v.625a.313.313 0 00.313.313h8.124a.313.313 0 00.313-.313V.937a.312.312 0 00-.313-.312zM1.038 9.12a.938.938 0 00.936.879h4.8a.938.938 0 00.936-.88l.414-6.62h-7.5l.414 6.62z" />
    </svg>
);

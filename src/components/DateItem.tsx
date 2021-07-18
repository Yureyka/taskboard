import clsx from "clsx";
import React from "react";
import { Button } from "./Button";

interface IDateItem {
    dayName: string;
    dayNumber: number;
    isCurrent?: boolean;
}

export const DateItem: React.FC<IDateItem> = ({ dayName, dayNumber, isCurrent }) => {
    return (
        <button className={clsx("date-btn", isCurrent && "date-btn--current")}>
            <p className="date-btn__week">{dayName}</p>
            <p className="date-btn__day">{dayNumber}</p>
        </button>
    );
};

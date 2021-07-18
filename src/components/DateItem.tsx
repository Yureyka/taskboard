import React from "react";
import clsx from "clsx";

interface IDateItem {
    dayName: string;
    dayNumber: number;
    isCurrent?: boolean;
    onClick: () => void;
}

export const DateItem: React.FC<IDateItem> = ({ dayName, dayNumber, isCurrent, onClick }) => {
    return (
        <button onClick={onClick} className={clsx("date-btn", isCurrent && "date-btn--current")}>
            <p className="date-btn__week">{dayName}</p>
            <p className="date-btn__day">{dayNumber}</p>
        </button>
    );
};

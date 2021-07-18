import React from "react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { DateItem } from "./DateItem";

const weeks = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const Dates: React.FC = () => {
    const { checkDate } = taskBoardStore;
    return (
        <div>
            <div className="dates">
                <h3 className="dates__title">Мои задачи</h3>
                <div className="dates__line">
                    {checkDate().map((date, index) => (
                        <DateItem isCurrent={new Date().getDate() === date.getDate()} dayName={weeks[index]} dayNumber={date.getDate()} />
                    ))}
                </div>
            </div>
        </div>
    );
};

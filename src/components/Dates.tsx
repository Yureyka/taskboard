import React from "react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { DateItem } from "./DateItem";

const weeks = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const Dates: React.FC = () => {
    const { checkDate, setCurrentDate } = taskBoardStore;
    return (
        <div>
            <div className="dates">
                <h3 className="dates__title">Мои задачи</h3>
                <div className="dates__line">
                    {checkDate().map((date, index) => {
                        const currentDate = date.getDate();

                        return (
                            <DateItem
                                key={currentDate}
                                onClick={() => setCurrentDate(currentDate)}
                                isCurrent={new Date().getDate() === currentDate}
                                dayName={weeks[index]}
                                dayNumber={currentDate}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

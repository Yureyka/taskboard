import React from "react";
import { taskBoardStore } from "../stores/TaskBoardStore";

export const Dates: React.FC = () => {
    const { checkDate } = taskBoardStore;
    return (
        <div>
            <div className="dates">
                <h3 className="dates__title">Мои задачи</h3>
                <div className="dates__line">
                    <p>Пн</p>
                    <p>Вт</p>
                    <p>Ср</p>
                    <p>Чт</p>
                    <p>Пт</p>
                    <p>Сб</p>
                    <p>Вс</p>
                </div>
                <div className="dates__line">
                    {checkDate().map(element => <p key={element}>{element}</p>)}
                </div>
            </div>
        </div>
    );
};

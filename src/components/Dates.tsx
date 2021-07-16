import React from "react";

export const Dates: React.FC = () => {
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
                    <p>01</p>
                    <p>02</p>
                    <p>03</p>
                    <p>04</p>
                    <p>05</p>
                    <p>06</p>
                    <p>07</p>
                </div>
            </div>
        </div>
    );
};

import React from "react";

export const AddCategoryForm: React.FC = () => {
    return (
        <div id="add-form" className="add-form">
            <h4 className="add-form__title">Название категории</h4>
            <input className="add-form__input" type="text" placeholder="Введите название" />
            <button className="add-form__btn">Создать категорию</button>
        </div>
    );
};

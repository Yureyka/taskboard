import React from "react";
import { observer } from "mobx-react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { Button } from "./Button";

export const AddCategoryForm: React.FC = observer(() => {
    const { addCategory, setCategoryName, categoryName } = taskBoardStore;

    return (
        <div id="add-form" className="add-form">
            <h4 className="add-form__title">Название категории</h4>
            <input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="add-form__input"
                type="text"
                placeholder="Введите название"
            />
            <Button disabled={categoryName == ""} onClick={addCategory} isFullWidth size="large">
                Создать категорию
            </Button>
        </div>
    );
});

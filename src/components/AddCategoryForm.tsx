import React from "react";
import { observer } from "mobx-react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { Button } from "./Button";
import { TextField } from "./TextField";

export const AddCategoryForm: React.FC = observer(() => {
    const { addCategory, setCategoryName, categoryName } = taskBoardStore;

    return (
        <div id="add-form" className="add-form">
            <h4 className="add-form__title">Название категории</h4>
            <form onSubmit={addCategory}>
                <div className="add-form__add-item">
                    <TextField value={categoryName} onChange={setCategoryName} />
                </div>
                <Button type="submit" disabled={categoryName === ""} isFullWidth size="large">
                    Создать категорию
                </Button>
            </form>
        </div>
    );
});

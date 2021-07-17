import React from "react";
import { observer } from "mobx-react";
import { AddCategory } from "./components/AddCategory";
import { AddCategoryForm } from "./components/AddCategoryForm";
import { Categories } from "./components/Categories";
import { Dates } from "./components/Dates";
import { taskBoardStore } from "./stores/TaskBoardStore";

export const App: React.FC = observer(() => {
    const { isAddingCategory } = taskBoardStore;

    return (
        <div className="App">
            <div className="content">
                <Dates />
                {!isAddingCategory ? <Categories /> : <AddCategoryForm />}
                <AddCategory />
            </div>
        </div>
    );
});

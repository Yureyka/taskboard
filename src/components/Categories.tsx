import React from "react";
import { observer } from "mobx-react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { AddCategoryForm } from "./AddCategoryForm";
import { CategoriesList } from "./CategoriesList";

export const Categories: React.FC = observer(() => {
    const { isAddingCategory } = taskBoardStore;
    return !isAddingCategory ? <CategoriesList /> : <AddCategoryForm />;
});

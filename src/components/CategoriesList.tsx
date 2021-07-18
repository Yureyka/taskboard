import { observer } from "mobx-react";
import React from "react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { CategoryItem } from "./CategoryItem";

export const CategoriesList: React.FC = observer(() => {
    const { data, currentDate } = taskBoardStore;

    return (
        <div className="categories">
            {data[currentDate].categories.length > 0 ? (
                data[currentDate].categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))
            ) : (
                <p className="categories__empty">Тут пусто :с</p>
            )}
        </div>
    );
});

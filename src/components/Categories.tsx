import React from "react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { CategoryItem } from "./CategoryItem";

export const Categories: React.FC = () => {
    const { data } = taskBoardStore;

    return (
        <div id="categories" className="categories">
            {data[0].categories.map((category) => (
                <CategoryItem key={category.name} category={category} />
            ))}
        </div>
    );
};

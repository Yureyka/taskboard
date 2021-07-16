import React from "react";
import { CategoryItem } from "../stores/TaskBoardStore";

interface IItem {
    item: CategoryItem;
}

export const Item: React.FC<IItem> = ({ item }) => {
    return (
        <li>
            <div className="todo">
                <p className="todo__title">{item.title}</p>
                <input type="checkbox" />
            </div>
        </li>
    );
};

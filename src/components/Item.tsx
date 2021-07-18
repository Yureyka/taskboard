import React from "react";
import { TrashIcon } from "../Icons/TrashIcon";
import { CategoryItem, taskBoardStore } from "../stores/TaskBoardStore";
import { Button } from "./Button";

interface IItem {
    item: CategoryItem;
    idCategory: string;
}

export const Item: React.FC<IItem> = ({ item, idCategory }) => {
    const { deleteToDo } = taskBoardStore;
    return (
        <li>
            <div className="todo">
                <p className="todo__title">{item.title}</p>
                <Button
                    isTransparent
                    size="small"
                    icon={<TrashIcon color="#FFA7A7" width={12} height={12} />}
                    onClick={() => deleteToDo(item.id, idCategory)}
                />
            </div>
        </li>
    );
};

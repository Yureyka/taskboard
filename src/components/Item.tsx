import React from "react";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { CategoryItem } from "../stores/TaskBoardStore";
import { Button } from "./Button";

interface IItem {
    item: CategoryItem;
}

export const Item: React.FC<IItem> = ({ item }) => {
    return (
        <li>
            <div className="todo">
                <p className="todo__title">{item.title}</p>
                <Button
                    isTransparent
                    size="small"
                    icon={<DeleteIcon color="#FFA7A7" width={12} height={12} />}
                />
            </div>
        </li>
    );
};

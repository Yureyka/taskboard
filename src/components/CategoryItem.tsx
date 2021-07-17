import React from "react";
import { Button } from "./Button";
import { AddIcon } from "../Icons/AddIcon";
import { Category } from "../stores/TaskBoardStore";
import { Item } from "./Item";
import { DeleteIcon } from "../Icons/DeleteIcon";

interface ICategory {
    category: Category;
}

export const CategoryItem: React.FC<ICategory> = ({ category }) => {
    return (
        <div className="category">
            <div className="category__top">
                <h4>{category.name}</h4>
                <div className="category__actions">
                    <Button
                        size="small"
                        isTransparent
                        icon={<AddIcon color="#000" width={12} height={12} />}
                    />
                    <Button
                        size="small"
                        icon={<DeleteIcon color="#fff" width={12} height={12} />}
                    />
                </div>
            </div>
            <ul className="category__list">
                {category.items.map((item) => (
                    <Item key={item.title} item={item} />
                ))}
            </ul>
        </div>
    );
};

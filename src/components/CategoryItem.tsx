import React from "react";
import { Button } from "./Button";
import { AddIcon } from "../Icons/AddIcon";
import { Category } from "../stores/TaskBoardStore";
import { Item } from "./Item";

interface ICategory {
    category: Category;
}

export const CategoryItem: React.FC<ICategory> = ({ category }) => {
    return (
        <div className="category">
            <div className="category__top">
                <h4>{category.name}</h4>
                <Button icon={<AddIcon color="#000" width={12} height={12} />} isAddIcon />
            </div>
            <ul className="category__list">
                {category.items.map((item) => (
                    <Item key={item.title} item={item} />
                ))}
            </ul>
        </div>
    );
};
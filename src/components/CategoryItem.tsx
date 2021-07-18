import React, { useState } from "react";
import { Button } from "./Button";
import { PlusIcon } from "../Icons/PlusIcon";
import { Category, taskBoardStore } from "../stores/TaskBoardStore";
import { Item } from "./Item";
import { TrashIcon } from "../Icons/TrashIcon";
import { observer } from "mobx-react";
import { TextField } from "./TextField";

interface ICategory {
    category: Category;
}

export const CategoryItem: React.FC<ICategory> = observer(({ category }) => {
    const [isAddingToDo, setIsAddingToDo] = useState(false);
    const [value, setValue] = useState("");

    const { addToDo, deleteCategory } = taskBoardStore;

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        addToDo(category.id, value);
        setValue("");
    };

    return (
        <div className="category">
            <div className="category__top">
                <h4>{category.name}</h4>
                <div className="category__actions">
                    <Button
                        size="small"
                        isTransparent
                        icon={<PlusIcon color="#000" width={12} height={12} />}
                        onClick={() => setIsAddingToDo((prev) => !prev)}
                    />
                    <Button
                        size="small"
                        icon={<TrashIcon color="#fff" width={12} height={12} />}
                        onClick={() => deleteCategory(category.id)}
                    />
                </div>
            </div>
            {isAddingToDo && (
                <form onSubmit={handleSubmit} className="category__add-item">
                    <TextField
                        className="category__add-item--input"
                        value={value}
                        onChange={setValue}
                    />
                    <Button
                        type="submit"
                        size="small"
                        icon={<PlusIcon color="#fff" width={12} height={12} />}
                    />
                </form>
            )}
            <ul className="category__list">
                {category.items.length > 0 ? (
                    category.items.map((item) => (
                        <Item key={item.id} idCategory={category.id} item={item} />
                    ))
                ) : (
                    <p className="category__empty">Ничего нет :c</p>
                )}
            </ul>
        </div>
    );
});

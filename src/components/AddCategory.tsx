import React from "react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { Button } from "./Button";
import { AddIcon } from "../Icons/AddIcon";

export const AddCategory: React.FC = () => {
    const { toggleIsAdding } = taskBoardStore;

    return (
        <div className="add-category">
            <Button icon={<AddIcon width={22} height={22} />} onClick={toggleIsAdding} />
        </div>
    );
};

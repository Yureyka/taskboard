import React from "react";
import { taskBoardStore } from "../stores/TaskBoardStore";
import { Button } from "./Button";
import { PlusIcon } from "../Icons/PlusIcon";
import { CrossIcon } from "../Icons/CrossIcon";
import { observer } from "mobx-react";

export const AddCategory: React.FC = observer(() => {
    const { toggleIsAddingCategory, isAddingCategory } = taskBoardStore;

    return (
        <div className="add-category">
            <Button
                icon={!isAddingCategory ? <PlusIcon width={22} height={22} /> : <CrossIcon />}
                onClick={toggleIsAddingCategory}
            />
        </div>
    );
});

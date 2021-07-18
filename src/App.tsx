import React from "react";
import { observer } from "mobx-react";
import { AddCategory } from "./components/AddCategory";
import { Categories } from "./components/Categories";
import { Dates } from "./components/Dates";
import { taskBoardStore } from "./stores/TaskBoardStore";

export const App: React.FC = () => {
    return (
        <div className="App">
            <div className="content">
                <Dates />
                <Categories />
                <AddCategory />
            </div>
        </div>
    );
};

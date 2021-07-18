import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

export type Categories = {
    id: string;
    date: Date;
    categories: Category[];
};

export type Category = {
    id: string;
    name: string;
    items: CategoryItem[];
};

export type CategoryItem = {
    id: string;
    title: string;
};

export class TaskBoardStore {
    isAddingCategory: boolean = false;
    categoryName: string = "";
    currentDate: number = 0;
    month: number[] = [1, 2, 3, 4, 5, 6, 7];
    data: Categories[] = [
        {
            id: "tfvgyh7j5t6ngjh",
            date: new Date(),
            categories: [
                {
                    id: "dgfdf",
                    name: "Лекарства",
                    items: [
                        {
                            id: "fdsfdfsd",
                            title: "Принять таблетки",
                        },
                        {
                            id: "tryrtb",
                            title: "Выпить пиво",
                        },
                    ],
                },
                {
                    id: "trgdv",
                    name: "Продукты",
                    items: [
                        {
                            id: "etgac",
                            title: "Сметана",
                        },
                        {
                            id: "bfdv",
                            title: "Хлеб",
                        },
                        {
                            id: "grfbv",
                            title: "Пиво",
                        },
                    ],
                },
            ],
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    toggleIsAddingCategory = () => {
        this.isAddingCategory = !this.isAddingCategory;
    };

    checkDate = (): number[] => {
        return this.month;
    };

    addCategory = () => {
        this.data[this.currentDate].categories.push({
            id: v4(),
            name: this.categoryName,
            items: [],
        });
        this.categoryName = "";
        this.isAddingCategory = false;
    };

    setCategoryName = (name: string) => {
        this.categoryName = name;
    };

    addToDo = (id: string, title: string) => {
        if (title === "") return;

        const category = this.data[this.currentDate].categories.find(
            (category) => category.id === id
        );
        if (category) {
            category.items.push({
                id: v4(),
                title: title,
            });
        }
    };

    deleteToDo = (id: string, idCategory: string) => {
        const category = this.data[this.currentDate].categories.find(
            (category) => category.id === idCategory
        );
        if (category) {
            category.items = category.items.filter((item) => item.id !== id);
        }
    };

    deleteCategory = (id: string) => {
        this.data[this.currentDate].categories = this.data[this.currentDate].categories.filter(
            (item) => item.id !== id
        );
    };
}

export const taskBoardStore = new TaskBoardStore();

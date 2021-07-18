import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

export type Categories = {
    id: string;
    date: number;
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
    currentDate: number = new Date().getDate();
    data: Categories[] = [
        {
            id: "tfvgyh7j5t6ngjh",
            date: 18,
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

    checkDate = (): Date[] => {
        const now = new Date();
        const startDay = 1;
        const day = now.getDay();
        const weekStart = new Date(
            now.valueOf() - (day <= 0 ? 7 - startDay : day - startDay) * 86400000
        );
        const weekEnd = new Date(weekStart.valueOf() + 6 * 86400000);

        return this.getDatesBetween(weekStart, weekEnd);
    };

    addCategory = () => {
        const currentCategories = this.getCategories();

        if (currentCategories && currentCategories.categories) {
            currentCategories.categories.push({
                id: v4(),
                name: this.categoryName,
                items: [],
            });
        } else {
            this.data.push({
                id: v4(),
                date: this.currentDate,
                categories: [
                    {
                        id: v4(),
                        name: this.categoryName,
                        items: [],
                    },
                ],
            });
        }
        this.categoryName = "";
        this.isAddingCategory = false;
    };

    setCategoryName = (name: string) => {
        this.categoryName = name;
    };

    addToDo = (id: string, title: string) => {
        if (title === "") return;

        const category = this.getCategories().categories.find((category) => category.id === id);
        if (category) {
            category.items.push({
                id: v4(),
                title: title,
            });
        }
    };

    setCurrentDate = (currentDate: number) => {
        this.currentDate = currentDate;
    };

    deleteToDo = (id: string, idCategory: string) => {
        const category = this.getCategories().categories.find(
            (category) => category.id === idCategory
        );
        if (category) {
            category.items = category.items.filter((item) => item.id !== id);
        }
    };

    deleteCategory = (id: string) => {
        this.getCategories().categories = this.getCategories().categories.filter(
            (item) => item.id !== id
        );
    };

    getDatesBetween = (startDate: Date, endDate: Date) => {
        const dates = [];

        let currentDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
        );

        while (currentDate <= endDate) {
            dates.push(currentDate);

            currentDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() + 1
            );
        }

        return dates;
    };

    getCategories = (): Categories => {
        return (
            this.data.find((category) => category.date === this.currentDate) || ({} as Categories)
        );
    };
}

export const taskBoardStore = new TaskBoardStore();

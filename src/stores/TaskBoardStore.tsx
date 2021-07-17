import { makeAutoObservable } from "mobx";

export type Categories = {
    date: Date;
    categories: Category[];
};

export type Category = {
    name: string;
    items: CategoryItem[];
};

export type CategoryItem = {
    title: string;
};

export class TaskBoardStore {
    isAddingCategory: boolean = false;
    isAddingToDo: boolean = false;
    categoryName: string = "";
    itemName: string = "";
    currentDate: number = 0;
    month: number[] = [1, 2, 3, 4, 5, 6, 7];
    data: Categories[] = [
        {
            date: new Date(),
            categories: [
                {
                    name: "Лекарства",
                    items: [
                        {
                            title: "Принять таблетки",
                        },
                        {
                            title: "Выпить пиво",
                        },
                    ],
                },
                {
                    name: "Продукты",
                    items: [
                        {
                            title: "Сметана",
                        },
                        {
                            title: "Хлеб",
                        },
                        {
                            title: "Пиво",
                        },
                    ],
                },
            ],
        },
        {
            date: new Date(),
            categories: [
                {
                    name: "Учеба",
                    items: [
                        {
                            title: "Сдать диплом",
                        },
                    ],
                },
            ],
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    toggleIsAdding = () => {
        this.isAddingCategory = !this.isAddingCategory;
    };

    checkDate = (): number[] => {
        return this.month;
    };

    addCategory = () => {
        this.data[this.currentDate].categories.push({
            name: this.categoryName,
            items: [],
        });
        this.categoryName = "";
        this.isAddingCategory = false;
    };

    setCategoryName = (name: string) => {
        this.categoryName = name;
    };
    
    addToDo = () => {
        this.data[this.currentDate].categories[0].items.push({
            title: this.itemName,
        });
    };

    setToDo = (title: string) => {
        this.itemName = title;
    };
}

export const taskBoardStore = new TaskBoardStore();

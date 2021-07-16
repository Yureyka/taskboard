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
    isAdding: boolean = false;
    icon: string = "";
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
        this.isAdding = !this.isAdding;
    };

    checkItem = () => {};
}

export const taskBoardStore = new TaskBoardStore();

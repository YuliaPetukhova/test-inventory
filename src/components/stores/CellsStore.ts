import {defineStore} from "pinia";
import {ICellItem} from "@/components/models/ICellItem";

export const useCellsStore = defineStore('cellsStore', {
    state: () => ({
        data: [
            {
                id: 1,
                count: 3,
                mainBackgroundColor: '#7FAA65',
                blurBackgroundColor: '#7FAA6559',
                empty: false,
            },
            {
                id: 2,
                count: 2,
                mainBackgroundColor: '#D9BB98',
                blurBackgroundColor: 'rgba(170,151,101,0.35)',
                empty: false,
            },
            {
                id: 3,
                count: 3,
                mainBackgroundColor: '#7481ED',
                blurBackgroundColor: 'rgba(101,108,170,0.35)',
                empty: false,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
            {
                empty: true,
            },
        ],
        selectedCell:
            {
                id: 1,
                count: 1,
                mainBackgroundColor: '#6b7a62',
                blurBackgroundColor: 'rgba(121,70,118,0.35)',
                empty: false,
            } as ICellItem,
    }),
    actions: {
        setSelectedCell(cell: ICellItem): void {
            this.selectedCell = cell;
        },
    },
});
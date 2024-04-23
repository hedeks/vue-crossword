import { defineStore } from "pinia";

export const createCrosswordStore = defineStore ("createCrosswordStore", {
    state: ()=>({
        wasAlreadyStart: false,
        wordsCount: 0,
        rowsCount: 0,
        colsCount: 0,
        currentWords: [],
        currentCrossword: []
    })
})
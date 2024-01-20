<template>
    <h1 align="center" class="title-h1">{{ store.current_crossword.text + " " + store.current_crossword.header }}</h1>
    <div class="crossword-game">
        <div class="crossword-game-view">
            <div class="crossword-game-view-wrapper">
                <input type="text" id="needed_input" @blur="store.blur" @input="store.input">
                <div class="row" v-for="(item, elem) in matrixCrossword" :key="item" :id="elem">
                    <div class="cell" v-for="(i, index) in item" @click="store.addClassToCurrentCell(elem + ', ' + index)"
                        :id="elem + ', ' + index" :key="i" :class="{ blackcell: i == null }">
                    </div>
                </div>
            </div>
        </div>
        <div class="crossword-game-down">
            <div class="crossword-game-down-title">
                <h3 align="center" class="title">По вертикали</h3>
                <ol class="ol">
                    <li v-for="(item, index) in downList" class="li" :id="'li' + index" @click="store.clickToLi(index)"
                        :key="index"> {{ parseInt(index) + 1
                            + ". "
                            + item.clue }}</li>
                </ol>
            </div>
        </div>
        <div class="crossword-game-across">
            <div class="crossword-game-across-title">
                <h3 align="center" class="title">По горизонтали</h3>
                <ol class="ol">
                    <li v-for="(item, index) in acrossList" class="li" :id="'li' + index" @click="store.clickToLi(index)"
                        :key="index"> {{ parseInt(index) +
                            1 +
                            ". " + item.clue }}</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, onBeforeMount } from 'vue'
import { crosswordStore } from "@/stores/store"
import { useRoute, useRouter } from 'vue-router'

const store = crosswordStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
    store.reset();
    store.fetchCurrent_crosswordFromDB(route.params.id);
    store.needed_input = document.getElementById('needed_input');
});
const downList = computed(() => {
    var result = {}
    var arr = store.getCurrentCrossword();
    arr = arr.words;
    for (let key in arr) {
        if (arr[key].direction === 'down') {
            result[key] = (arr[key]);
        }
    }
    return result;
});

const acrossList = computed(() => {
    var result = {}
    var arr = store.getCurrentCrossword();
    arr = arr.words;
    for (let key in arr) {
        if (arr[key].direction === 'across') {
            result[key] = (arr[key]);
        }
    }
    return result
});

const matrixCrossword = computed(() => {
    var result = [];
    var column = [];
    var words = store.getCurrentCrossword();
    var length = words.length;
    var iterators = length.toString().split(',');
    var iterator1 = parseInt(iterators[0]);
    var iterator2 = parseInt(iterators[1]);

    for (let i = 0; i < iterator1; i++) {
        column[i] = null;
    }

    for (let i = 0; i < iterator2; i++) {
        result.push(new Array(column.length));
    }

    words = words.words;

    for (let key in words) {
        let coordinates = words[key].coordinates;
        for (let i in coordinates) {
            let slicedCoor = coordinates[i].split(', ');
            let firstElem = parseInt(slicedCoor[0]);
            let secondElem = parseInt(slicedCoor[1]);
            if (result[firstElem][secondElem] != 1) {
                result[firstElem][secondElem] = 1;
            }
        }
    }
    return result;
});


</script>

<style lang="scss" scoped>
@keyframes pickedCell {
    0% {
        outline: none;
        border: 1px solid rgba($color: black, $alpha: 1);
    }

    50% {
        border: 1px solid rgba($color: rgb(255, 0, 0), $alpha: 1);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px, rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 4px 8px, rgba(0, 0, 0, 0.15) 0px 8px 16px, rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.15) 0px 32px 64px;
    }

    100% {
        // outline: solid 1pc rgb(255, 0, 0);
        border: 1px solid rgba($color: black, $alpha: 1);
    }
}

.picked_cell {
    z-index: 2;
    transition: all 0.3s ease-in-out;
    animation: pickedCell 2s infinite !important;
}

#needed_input {
    width: 0;
    height: 0;
    border: 0;
    outline: 0;
    caret-color: transparent;
    pointer-events: none;
}

.currentli {
    background-color: #dfdfdf !important;
    transition: background-color .5s ease-in-out;
    animation: pickedCell 2s infinite;
}

.li {
    border: 1px solid transparent;
    padding: 5px;

    &-hover {
        cursor: none;
    }
}

.title-h1 {
    text-align: center;
    margin: 50px auto 0 auto;
    font-weight: 400;
    font-size: 28px;
    width: fit-content;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}

.currentcell {
    background-color: #dfdfdf !important;
    background-blend-mode: difference;
}

.title {
    margin-bottom: 20px;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
    font-size: 24px;
    font-family: Lohit Devanagari;
    font-weight: 400;
}

.blackcell {
    background-color: black;
}

.incorrect {
    animation: slide 0.4s ease-in-out;
    background-color: rgba(255, 0, 0, 0.5) !important;
    transition: background-color 0.3s ease-in-out;
}

.correct {
    animation: scale 0.4s ease-in-out;
    background-color: rgb(127, 233, 135, 0.4);
    background-blend-mode: soft-light;
    transition: background-color 0.3s ease-in-out;
}

@keyframes slide {
    0% {
        transform: translateX(5px);
    }

    50% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes scale {
    0% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.row {
    display: flex;
}

.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    transition: border 0.3s ease-in-out, outline 0.3s ease-in-out,
        background-color .5s ease-in-out;
}

.crossword-game {
    min-height: 650px;
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 50px 0 50px 0;
    flex-wrap: wrap;

    &-view {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        margin-right: 20px;

        &-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    &-down {
        padding: 10px 0 10px 50px;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        min-height: 400px;
        width: 300px;
        border-left: 1px solid rgba($color: #000000, $alpha: 0.1);
    }

    &-across {
        padding: 10px 0 20px 50px;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        width: 300px;
        min-height: 400px;
        border-left: 1px solid rgba($color: #000000, $alpha: 0.1);
    }
}

.ol {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    text-align: start;
    padding: 5px;
    list-style-type: none;
}

@media only screen and (max-width: 1239px) {
    .crossword-game-across {
        border-left: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding: 20px 0 0 0;
    }
}

@media only screen and (max-width: 789px) {
    .crossword-game-down {
        border-left: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding: 20px 0 0 0;
    }
}
</style>
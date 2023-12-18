<template>
    <h1 class="title">Список кроссвордов</h1>
    <div v-if="!store.isfirstFetchReady" class="loader-wrapper">
        <div class="loader"></div>
    </div>
    <div class="crosswords-list">
            <MainCard v-for="item in crossword_list" :key="item" :header="item.header" :text="item.text"
                :img-path="item.imgPath" :button-slot="item.buttonSlot" :button-link="item.buttonLink"
                :img-size="item.imgSize" />
    </div>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import MainCard from '@/components/MainCard.vue';
import { crosswordStore } from '@/stores/store.js'

const store = crosswordStore();
const crossword_list = computed(() => {
    if (store.isfirstFetchReady) {
        return store.crossword_list;
    }
})
onMounted(() => {
    store.fetchCrossword_listFromDB();
});

</script>

<style lang="scss" scoped>

.loader-wrapper {
    height: 35vh;
    display: flex;
}

.loader {
    --n: 5;
    --s: 30px;
    --g: 5px;

    width: calc(var(--n)*(var(--s) + var(--g)) - var(--g));
    height: 30px;
    padding: var(--g);
    margin: auto;
    border: 1px solid;
    background:
        repeating-linear-gradient(90deg,
            currentColor 0 var(--s),
            #0000 0 calc(var(--s) + var(--g))) left / calc((var(--n) + 1)*(var(--s) + var(--g))) 100% no-repeat content-box;
    animation: load 1.5s steps(calc(var(--n) + 1)) infinite;
}

@keyframes load {
    0% {
        background-size: 0% 100%
    }
}

.title {
    text-align: center;
    margin: 60px 0 60px 0;
    font-weight: 400;
    font-size: 32px;
}

.crosswords-list {
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
    .crosswords-list {
        margin-bottom: 50px;
        gap: 30px;
    }

    .loader-wrapper {
        height: 50vh;
    }
}
</style>
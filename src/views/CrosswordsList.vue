<template>
    <div class="crosswords-list">
        <MainCard v-for="item in cards" :key="item" :header="item.header" :text="item.text" :img-path="item.imgPath"
            :button-slot="item.buttonSlot" :button-link="item.buttonLink" :img-size="item.imgSize" />
    </div>
</template>
<script setup>
import MainCard from '@/components/MainCard.vue';

const cards = [
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },
    {
        header: '5 x 5',
        text: 'Маленький, быстрый кроссворд по случайным темам',
        imgPath: './src/assets/crosswordFiveXFive.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'small'
    },
    {
        header: '9 x 7',
        text: 'Кроссворд побольше, связанный с математикой',
        imgPath: './src/assets/crosswordNineXSeven.png',
        buttonSlot: 'Решить',
        buttonLink: '#',
        imgSize: 'auto'
    },

];
</script>

<style lang="scss" scoped>
.crosswords-list {
    margin: 20px 0 20px 0;
    min-height: 650px;
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
}
</style>
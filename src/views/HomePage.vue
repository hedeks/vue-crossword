<template>
    <div class="main-content">
        <MainCard v-for="item in cards" :key="item" :header="item.header" :text="item.text" :img-path="item.imgPath"
            :button-slot="item.buttonSlot" :button-link="item.buttonLink" :isNeedParam="false" :isNeedButton="true" :cardSize ="'normal'"/>
    </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue';
import { useRouter } from 'vue-router'


let cards = [
    {
        header: 'Посмотреть Кроссворды',
        text: 'Вы можете порешать наши кроссворды, качественно составленные для вас',
        imgPath: './src/assets/crossword.png',
        buttonSlot: 'Посмотреть',
        buttonLink: 'CrosswordsList',
    },
    {
        header: 'Создать Кроссворд',
        text: 'Вы можете создать кроссворд от 5 x 5 до 10 x 10',
        imgPath: './src/assets/create-crossword.png',
        buttonSlot: 'Создать',
        buttonLink: 'CrosswordCreatePage',
    }
];
const router = useRouter();

</script>

<style lang="scss" scoped>
.main-content {
    min-height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
    margin: 30px 0 30px 0;
}

@media screen and (max-width: 768px) {
    .main-content {
        margin-bottom: 50px;
        gap: 30px;
    }
}
</style>
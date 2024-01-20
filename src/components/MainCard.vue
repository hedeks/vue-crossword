<template>
    <div class="card" :class="[{ cardNormal: cardSize === 'normal' }, { cardSmall: cardSize === 'small' }]"
        @mouseenter="ishovered = true" @mouseleave="ishovered = false">
        <div class="img" :class="{ img_hovered: ishovered }">
            <img class="img-item" :src="imgPath" alt="img"
                :class="[{ imgSizeAuto: imgSize === 'auto' }, { imgSizeSmall: imgSize === 'small' }, { imgSizeMicro: imgSize === 'micro' }]">
        </div>
        <h3>{{ header }}</h3>
        <p> {{ text }} </p>
        <button v-if="!isNeedParam && isNeedButton" class="button" @click="router.push({ name: buttonLink })"> {{ buttonSlot
        }} </button>
        <button v-if="isNeedParam && isNeedButton" class="button"
            @click="router.push({ name: buttonLink, params: { id: crossword_id } })"> {{ buttonSlot }} </button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { ref } from 'vue'

const router = useRouter();
const ishovered = ref(false);
const props = defineProps({
    header: String,
    text: String,
    imgPath: String,
    buttonSlot: String,
    buttonLink: String,
    imgSize: String,
    isNeedParam: Boolean,
    isNeedButton: Boolean,
    crossword_id: Number,
    cardSize: String,
});
</script>

<style lang="scss" scoped>
.cardNormal {
    padding: 0 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: fit-content;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    gap: 10px;
    border: 1px solid white;

    p {
        color: #585858;
    }

    h3 {
        font-weight: bold;
        font-size: 22px;
    }

    &:hover {
        cursor: default;
        background-color: #f2f2f2;
        border: 1px solid black;
    }

    img {
        margin: auto;
        height: 100px;
        width: 100px;

    }

    .img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        height: 200px;
        width: 100%;
        background-color: #f2f2f2;

        &-item {
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(0.95);
            }
        }

        transition: all 0.2s ease-in-out;

        &_hovered {
            background-color: white !important;
        }
    }

    .imgSizeAuto {
        height: 155px;
        width: auto;
    }

    .imgSizeSmall {
        height: 140px;
        width: 140px;
    }

    .imgSizeMicro {
        height: 80px;
        width: auto;
    }

    .button {
        width: 70%;
        height: 30px;
        background-color: #b1b1b1;
        border: 0;
        border-radius: 20px;
        transition: transform 0.1s ease, background-color 0.5s ease;
        color: white;

        &:hover {
            background-color: white;
            border: 1px solid black;
            color: black;
            cursor: pointer;
        }

        &:active {
            transform: scale(0.95);
        }
    }
}

.cardSmall {
    padding: 0 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: fit-content;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    gap: 10px;
    border: 1px solid white;

    p {
        color: #161616;
        font-size: 14px;
    }

    h3 {
        font-weight: bold;
        font-size: 16px;
    }

    img {
        margin: auto;
        height: 100px;
        width: 100px;

    }

    .img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        height: 100px;
        width: 100%;
        background-color: #f2f2f2;

    }

    .imgSizeAuto {
        height: 155px;
        width: auto;
    }

    .imgSizeSmall {
        height: 140px;
        width: 140px;
    }

    .imgSizeMicro {
        height: 80px;
        width: auto;
    }

    .button {
        width: 70%;
        height: 30px;
        background-color: #b1b1b1;
        border: 0;
        border-radius: 20px;
        transition: transform 0.1s ease, background-color 0.5s ease;
        color: white;

    }
}</style>
<template>
        <div class="card">
            <div class="img">
                <img class="img-item" :src="imgPath" alt="img"
                    :class="[{ imgSizeAuto: imgSize === 'auto' }, { imgSizeSmall: imgSize === 'small' }]">
            </div>
            <h3>{{ header }}</h3>
            <p> {{ text }} </p>
            <button class="button" @click="router.push({ name: buttonLink })"> {{ buttonSlot }} </button>
        </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter();

const props = defineProps({
    header: String,
    text: String,
    imgPath: String,
    buttonSlot: String,
    buttonLink: String,
    imgSize: String,
});
</script>

<style lang="scss" scoped>

.card {
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
        background-color: #dddddd;
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
    }

    .imgSizeAuto {
        height: 155px;
        width: auto;
    }

    .imgSizeSmall {
        height: 155px;
        width: 155px;
    }

    .button {
        width: 70%;
        height: 30px;
        background-color: #b1b1b1;
        border: 0;
        border-radius: 20px;
        transition: all 0.1s ease-in-out;
        color: white;

        &:hover {
            background-color: white;
            border: 1px solid black;
            color: black;
            transform: scale(1.05);
            cursor: pointer;
        }

        &:active {
            transform: scale(0.95);
        }
    }
}
</style>
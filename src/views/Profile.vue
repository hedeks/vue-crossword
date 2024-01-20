<template>
    <div class="profile-container">
        <div class="profile-data-wrapper card">
            <h3 class="title">Персональная информация</h3>
            <div class="profile-data card-inner">
                <span class="info">Имя: <b>{{ store.currentUsername }}</b></span>
                <span class="info">Адрес почты: <b>{{ store.currentUserEmail }}</b></span>
            </div>
        </div>
        <div class="profile-achivements-wrapper card">
            <h3 class="title">Ваши достижения</h3>
            <div class="profile-achievements card-inner">
                <span class="info">В разработке</span>
            </div>
        </div>
        <div class="profile-stats-wrapper card">
            <h3 class="title">Ваша статистика</h3>
            <div class="profile-stats card-inner">
                <span class="info">Решено кроссвордов всего: {{ store.currentLastWins.length }}</span>
                <span class="info">Решенные кроссворды: </span>
                <div class="cards">
                    <MainCard v-for="object of store.currentLastWins"
                        :header="truncateString(object.crossword.text, 45)"
                        :text="`Дата решения: ${getDate(object.date)}
                        Время решения: ${object.timeToSolveInSeconds} сек
                        ` "
                        :buttonSlot="'Посмотреть'" 
                        :imgPath="object.crossword.imgPath"
                        :imgSize="'micro'"
                        :isNeedButton="false"
                        :cardSize = "'small'"/>
                </div>
            </div>
        </div>
        <button class="button" @click="logout">Выйти</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { crosswordStore } from '@/stores/store.js'
import MainCard from '@/components/MainCard.vue';

const router = useRouter();
const store = crosswordStore();

const logout = () => {
    localStorage.removeItem('token');
    store.isUserAuthorized = false;
    router.push({ name: "LoginAndRegistration" })
};

function getDate(date){
    let finalDate = new Date(date)
    return  finalDate.getDate().toString().padStart(2, '0') + ":" + String(Number(finalDate.getMonth()) + 1).toString().padStart(2, '0') + ":" + finalDate.getFullYear() + " " + finalDate.getHours().toString().padStart(2, '0') + ":" + finalDate.getMinutes().toString().padStart(2, '0')
}

function truncateString(string, maxLength) {
    if (string.length > maxLength) {
        return string.slice(0, maxLength - 3) + "...";
    }
    return string;
}
onMounted(() => {
    store.fetchUser();
});

</script>


<style lang="scss" scoped>
.info {
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 400;
}

.cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px 0 10px;
    background-color: #fafafa;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-inner {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px 0 10px;
    background-color: #ebebeb;
    border-radius: 10px;
}

.profile-container {
    padding: 10px;
    max-width: 960px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    min-height: 50vh;
}

.button {
    width: 208px;
    margin: 0 auto;
    height: 30px;
    background-color: #b1b1b1;
    border: 0;
    margin-top: 10px;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
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

.title {
    font-weight: 400;
    font-size: 22px;
    width: fit-content;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}

.profile {
    display: flex;
    flex-direction: column;
}
</style>
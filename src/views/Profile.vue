<template>
    <button class="button" @click="logout">Выйти</button>
    <div class="profile">
        <h3>Ваше имя: {{ store.currentUsername }}</h3>
        <h3>Ваш email: {{ store.currentUserEmail }}</h3>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import {crosswordStore} from '@/stores/store.js'

const router = useRouter();
const store = crosswordStore();

const logout = () => {
    localStorage.removeItem('token');
    store.isUserAuthorized = false;
    router.push({name: "LoginAndRegistration"})
};

onMounted(()=>{
    store.fetchUser();
}); 

</script>


<style lang="scss">

.button {
    width: 208px;
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

.profile {
    min-height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
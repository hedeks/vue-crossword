<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const searchInput = ref()
const router = useRouter();
const isSearched = ref({ toggled: false });
const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
}

const toggle = () => {
    isSearched.value.toggled = !isSearched.value.toggled;
}
watch(
    () => isSearched.value.toggled,
    (newValue) => {
        if (newValue == true) {
            setTimeout(() => {
                searchInput.value.focus()
            }, 0);
        }
    });
    onMounted(()=>{
        window.addEventListener('scroll', handleScroll);
    });

</script>

<template>
    <div class="header" :class="{ active: isScrolled }">
        <div class="icons search-container">
            <div class="search" @click="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect width="18" height="18" fill="white" style="mix-blend-mode:multiply" />
                    <path
                        d="M14.5001 13.7929L10.7241 10.0169C11.6314 8.92758 12.0839 7.53038 11.9873 6.11596C11.8908 4.70153 11.2526 3.37879 10.2057 2.42288C9.15867 1.46698 7.78347 0.951515 6.36612 0.983723C4.94877 1.01593 3.5984 1.59333 2.59593 2.59581C1.59345 3.59828 1.01605 4.94865 0.983845 6.366C0.951637 7.78335 1.4671 9.15855 2.423 10.2055C3.37891 11.2525 4.70165 11.8907 6.11608 11.9872C7.5305 12.0838 8.9277 11.6313 10.017 10.7239L13.7931 14.5L14.5001 13.7929ZM2.00012 6.5C2.00012 5.60998 2.26404 4.73995 2.75851 3.99993C3.25297 3.25991 3.95578 2.68313 4.77804 2.34254C5.60031 2.00194 6.50511 1.91283 7.37802 2.08646C8.25094 2.2601 9.05276 2.68868 9.6821 3.31802C10.3114 3.94735 10.74 4.74918 10.9137 5.62209C11.0873 6.495 10.9982 7.3998 10.6576 8.22207C10.317 9.04434 9.7402 9.74714 9.00018 10.2416C8.26016 10.7361 7.39013 11 6.50012 11C5.30705 10.9987 4.16323 10.5241 3.3196 9.68052C2.47597 8.83689 2.00144 7.69306 2.00012 6.5Z"
                        fill="#2A254B" />
                </svg>
            </div>
            <transition>
                <input ref="searchInput" @blur="toggle" v-show="isSearched.toggled" type="text" class="search-input">
            </transition>
        </div>
        <p class="label" @click="router.push({ name: 'Home' })">
            better_than_crossword
        </p>
        <div class="icons">
            <div class="crosswords" @click="router.push({ name: 'CrosswordsList' })">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                    y="0px" viewBox="0 0 96 96" enable-background="new 0 0 96 96">
                    <path
                        d="M23.25,91.251h15.5h1.5h15.5h1.5h15.5h1.5h17v-17v-1.5v-15.5v-1.5v-15.5v-1.5v-15.5v-1.5v-17h-17h-1.5h-15.5h-1.5h-15.5  h-1.5h-15.5h-1.5h-17v17v1.5v15.5v1.5v15.5v1.5v15.5v1.5v17h17H23.25z M74.25,6.251h15.5v15.5h-15.5V6.251z M74.25,23.251h15.5v15.5  h-15.5V23.251z M74.25,40.251h15.5v15.5h-15.5V40.251z M74.25,57.251h15.5v15.5h-15.5V57.251z M74.25,74.251h15.5v15.5h-15.5V74.251  z M57.25,6.251h15.5v15.5h-15.5V6.251z M57.25,23.251h15.5v15.5h-15.5V23.251z M57.25,74.251h15.5v15.5h-15.5V74.251z M40.25,23.251  h15.5v15.5h-15.5V23.251z M40.25,57.251h15.5v15.5h-15.5V57.251z M40.25,74.251h15.5v15.5h-15.5V74.251z M23.25,6.251h15.5v15.5  h-15.5V6.251z M23.25,23.251h15.5v15.5h-15.5V23.251z M23.25,40.251h15.5v15.5h-15.5V40.251z M23.25,57.251h15.5v15.5h-15.5V57.251z   M6.25,6.251h15.5v15.5H6.25V6.251z M6.25,23.251h15.5v15.5H6.25V23.251z M6.25,40.251h15.5v15.5H6.25V40.251z M6.25,57.251h15.5  v15.5H6.25V57.251z" />
                </svg>
            </div>
            <div class="avatar" @click="router.push({ name: 'Profile' })">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect width="18" height="18" fill="none" style="mix-blend-mode:multiply" />
                    <path
                        d="M9 4.5C8.44374 4.5 7.89998 4.66495 7.43746 4.97399C6.97495 5.28303 6.61446 5.72229 6.40159 6.2362C6.18872 6.75012 6.13302 7.31562 6.24154 7.86119C6.35007 8.40676 6.61793 8.9079 7.01127 9.30124C7.4046 9.69457 7.90574 9.96244 8.45131 10.071C8.99688 10.1795 9.56238 10.1238 10.0763 9.91091C10.5902 9.69804 11.0295 9.33755 11.3385 8.87504C11.6476 8.41253 11.8125 7.86876 11.8125 7.3125C11.8125 6.56658 11.5162 5.85121 10.9887 5.32376C10.4613 4.79632 9.74592 4.5 9 4.5ZM9 9C8.66625 9 8.33999 8.90103 8.06248 8.7156C7.78497 8.53018 7.56868 8.26663 7.44096 7.95828C7.31323 7.64993 7.27982 7.31063 7.34493 6.98328C7.41004 6.65594 7.57076 6.35526 7.80676 6.11926C8.04276 5.88326 8.34345 5.72254 8.67079 5.65742C8.99813 5.59231 9.33743 5.62573 9.64578 5.75345C9.95413 5.88118 10.2177 6.09747 10.4031 6.37498C10.5885 6.65248 10.6875 6.97874 10.6875 7.3125C10.687 7.7599 10.509 8.18883 10.1927 8.50518C9.87633 8.82154 9.4474 8.99949 9 9Z"
                        fill="black" />
                    <path
                        d="M9 1.125C7.44248 1.125 5.91992 1.58686 4.62489 2.45218C3.32985 3.31749 2.32049 4.5474 1.72445 5.98637C1.12841 7.42534 0.972461 9.00874 1.27632 10.5363C1.58018 12.0639 2.3302 13.4671 3.43154 14.5685C4.53288 15.6698 5.93607 16.4198 7.46367 16.7237C8.99127 17.0275 10.5747 16.8716 12.0136 16.2756C13.4526 15.6795 14.6825 14.6702 15.5478 13.3751C16.4131 12.0801 16.875 10.5575 16.875 9C16.8727 6.91214 16.0422 4.91047 14.5659 3.43413C13.0895 1.95779 11.0879 1.12735 9 1.125ZM5.625 14.8368V14.0625C5.62549 13.6151 5.80344 13.1862 6.1198 12.8698C6.43616 12.5534 6.8651 12.3755 7.3125 12.375H10.6875C11.1349 12.3755 11.5638 12.5534 11.8802 12.8698C12.1966 13.1862 12.3745 13.6151 12.375 14.0625V14.8368C11.3508 15.4348 10.186 15.75 9 15.75C7.81396 15.75 6.64922 15.4348 5.625 14.8368ZM13.4958 14.0208C13.4846 13.2829 13.184 12.579 12.6587 12.0607C12.1334 11.5424 11.4254 11.2513 10.6875 11.25H7.3125C6.57456 11.2513 5.86665 11.5424 5.34135 12.0607C4.81604 12.579 4.5154 13.2829 4.50422 14.0208C3.48416 13.1099 2.76482 11.9108 2.44144 10.582C2.11806 9.25327 2.2059 7.85764 2.69333 6.57993C3.18076 5.30222 4.04478 4.2027 5.17099 3.42696C6.2972 2.65121 7.63248 2.23584 9 2.23584C10.3675 2.23584 11.7028 2.65121 12.829 3.42696C13.9552 4.2027 14.8192 5.30222 15.3067 6.57993C15.7941 7.85764 15.8819 9.25327 15.5586 10.582C15.2352 11.9108 14.5158 13.1099 13.4958 14.0208Z"
                        fill="black" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.active {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-input {
    width: 100px;
    outline: none;
    transition: all 0.3s ease-in-out;

    &::placeholder {
        font-family: Lohit Devanagari;
    }
}

svg {
    width: 18px;
    height: 18px;
}

.search {
    display: flex;
    width: 38px;
    height: 19px;
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
}


.avatar {
    display: flex;
    width: 19px;
    height: 19px;
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
}

.crosswords {
    display: flex;
    align-items: center;
    width: 18px;
    height: 18px;
    transition: all 0.1s ease-in-out;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
}

.header {
    margin: 0 -20px 0 -20px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 1000;
    transition: box-shadow 0.2s ease-in-out;
}

.label {
    font-size: 24px;
    font-family: Lohit Devanagari;
    margin: auto;
    transition: color 0.1s ease-in-out, transform 0.1s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }
}

.icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    width: 30%;
    gap: 10px;
}

@media screen and (max-width: 768px) {
    .search-container {
        display: none;
    }

    .header {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
}

.search-container {
    justify-content: flex-start;
    gap: 0;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    width: 0;
    opacity: 0;
}
</style>
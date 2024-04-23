<template>
    <h1 v-if="isLoginForm" class="title">Войти</h1>
    <h1 v-else class="title">Зарегистрироваться</h1>
    <div class="login">
        <div v-if="isLoginForm" class="loginForm form">
            <label class="label">Адрес электронной почты</label>
            <input type="text" ref="emailInput" class="input">
            <label v-if="emailValidationFailed" class="labelFailed">Неправильно введен email</label>
            <label class="label">Пароль</label>
            <input type="password" ref="passwordInput" class="input">
            <label v-if="passwordValidationFailed" class="labelFailed">Неправильно введен пароль</label>
            <button class="button" @click="validationFormLogin">Подтвердить</button>
        </div>
        <div v-else class="registerForm form">
            <label class="label">Логин</label>
            <input type="text" ref="loginInput" class="input">
            <label v-if="loginValidationFailed" class="labelFailed">Неправильно введен логин</label>
            <label class="label">Адрес электронной почты</label>
            <input type="text" ref="emailInput" class="input">
            <label v-if="emailValidationFailed" class="labelFailed">Неправильно введен email</label>
            <label class="label">Пароль</label>
            <input type="password" ref="passwordInput" class="input">
            <label v-if="passwordValidationFailed" class="labelFailed">Неправильно введен пароль</label>
            <label class="label">Подтвердите пароль</label>
            <input type="password" ref="secondPasswordInput" class="input">
            <label v-if="secondPasswordValidationFailed" class="labelFailed">Не соответствует</label>
            <button class="button" @click="validationFormRegister">Подтвердить</button>
        </div>
        <label v-if="IncorrectPassOrLogin" class="labelFailed">Неверный логин или пароль</label>
        <label v-if="successRegistration" class="labelSucces">Вы успешно зарегистрировались</label>
        <p @click="changeForm" v-if="isLoginForm" class="link">У вас еще нет аккаунта? Зарегистрироваться
        </p>
        <p @click="changeForm" v-else="!isLoginForm" class="link">У вас уже есть аккаунт? Войти</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { crosswordStore } from '@/stores/store.js'
import { useRouter } from 'vue-router'

const router = useRouter();
const store = crosswordStore();

const loginInput = ref();
const passwordInput = ref();
const emailInput = ref();
const secondPasswordInput = ref();

const loginValidationFailed = ref(false)
const passwordValidationFailed = ref(false)
const emailValidationFailed = ref(false);
const secondPasswordValidationFailed = ref(false);
const successRegistration = ref(false)
const IncorrectPassOrLogin = ref(false);

const isLoginForm = ref(true);

const resetFail = () => {
    loginValidationFailed.value = false;
    passwordValidationFailed.value = false;
    emailValidationFailed.value = false;
    secondPasswordValidationFailed.value = false;
    IncorrectPassOrLogin.value = false;
    successRegistration.value = false;
}

const changeForm = () => {
    isLoginForm.value = !isLoginForm.value;
    resetFail();
}

const validationFormRegister = async () => {
    if (emailInput.value.value === "") {
        emailValidationFailed.value = true;
    } else {
        let regex = /^[a-z0-9]+[\._]?[a-z0-9]*[@]\w+[.]\w{2,3}$/;
        if (!regex.test(emailInput.value.value)) {
            emailValidationFailed.value = true;
        } else {
            let response = await store.checkEmail(emailInput.value.value);
            if (response) {
                emailValidationFailed.value = false;
            } else {
                emailValidationFailed.value = true;
            }
        }
    }

    if (passwordInput.value.value === "") {
        passwordValidationFailed.value = true;
    } else {
        passwordValidationFailed.value = false;
    }

    if (loginInput.value.value === "") {
        loginValidationFailed.value = true;
    } else {
        loginValidationFailed.value = false;
    }

    if (secondPasswordInput.value.value === "") {
        secondPasswordValidationFailed.value = true;
    } else {
        if (secondPasswordInput.value.value === passwordInput.value.value) {
            secondPasswordValidationFailed.value = false;
        }
        else {
            secondPasswordValidationFailed.value = true;
        }
    }

    if (!emailValidationFailed.value && !passwordValidationFailed.value && !loginValidationFailed.value && !secondPasswordValidationFailed.value) {
        let response = await store.register(emailInput.value.value, passwordInput.value.value, loginInput.value.value)
        if (response === true) {
            changeForm();
            successRegistration.value = true;
        } else {
            IncorrectPassOrLogin.value = true;
        }
    }
}

const validationFormLogin = async () => {
    if (emailInput.value.value === "") {
        emailValidationFailed.value = true;
    } else {
        let regex = /^[a-z0-9]+[\._]?[a-z0-9]*[@]\w+[.]\w{2,3}$/;
        if (regex.test(emailInput.value.value)) {
            emailValidationFailed.value = false;
        } else {
            emailValidationFailed.value = true;
        }
    }

    if (passwordInput.value.value === "") {
        passwordValidationFailed.value = true;
    } else {
        passwordValidationFailed.value = false;
    }
    if (!emailValidationFailed.value && !passwordValidationFailed.value) {
        let response = await store.login(emailInput.value.value, passwordInput.value.value);
        if (response === true) {
            await store.fetchUser();
            router.push({ name: "Profile" });
        } else {
            resetFail();
            IncorrectPassOrLogin.value = true;
        }
    }
}

</script>

<style lang="scss" scoped>

input {
    border-top: 1px solid rgba($color: black, $alpha: 0.1);
    border-bottom: 1px solid rgba($color: black, $alpha: 0.1);
    border-left: 1px solid rgba($color: black, $alpha: 0.1);
    border-right: 1px solid rgba($color: black, $alpha: 0.1);
}
.labelFailed {
    color: rgba($color: red, $alpha: 0.7);
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 2px;
}

.labelSucces {
    color: rgba($color: green, $alpha: 0.7);
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 2px;
}

.validationFailed {

    input {
        outline: red solid 1px;
    }
}

.login {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba($color: #000000, $alpha: 0.1);
    width: 350px;
    margin: auto;
    margin-bottom: 60px;
    border-radius: 15px;
    padding: 30px;
}

.title {
    text-align: center;
    margin: 50px auto 50px auto;
    font-weight: 400;
    font-size: 32px;
    width: fit-content;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.link {

    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        color: rgba($color: #000000, $alpha: 0.5);
    }
}

.input {
    height: 30px;
    width: 200px;
    padding: 0 5px 0 5px;
    border-radius: 5px;
    border-width: 0.5px;
    outline: none;
    transition: all 0.5s ease;

    &:focus {
        border-color: rgb(78, 78, 78);
        background-color: white;
        outline: solid 0.5px black;

        &::placeholder {
            color: white;
        }
    }
}

.label {
    margin-bottom: -10px;
    font-size: 18px;
    width: 100%;
    text-align: start;
    padding-left: 5px;
    font-weight: 100;
    color: rgba($color: #000000, $alpha: 1.0);
}

p {
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: 1px;
}

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
</style>
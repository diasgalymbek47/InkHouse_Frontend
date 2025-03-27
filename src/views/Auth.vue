<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isAuth = ref(true);
const repeatPassword = ref('');
const postData = ref({
    login: '',
    password: '',
});

const submit = () => {
    if (isAuth.value) {
        auth(postData.value);
        return;
    }

    if (postData.value.password !== repeatPassword.value) {
        alert('Пароли не совпадает!');
        return;
    }
    register(postData.value);
}

const auth = async (user) => {
    await axios.post('http://localhost:5239/api/user/auth', user)
        .then(_ => {
            localStorage.setItem('user', JSON.stringify({ login: user.login }));
            router.push('/');
        })
        .catch(error => {
            postData.value.login = '';
            postData.value.password = '';
            alert(error.response.data.details);
        });
}

const register = async (user) => {
    await axios.post('http://localhost:5239/api/user/register', user)
        .then(_ => {
            repeatPassword.value = "";
            isAuth.value = true;
        })
        .catch(error => {
            postData.value.login = '';
            postData.value.password = '';
            alert(error.response.data.details);
        });
}
</script>

<template>
    <main class="container">
        <h3 class="mt-4">{{ isAuth ? 'Авторизация' : 'Регистрация' }}</h3>
        <form @submit.prevent="submit" class="pt-3 pb-3 d-flex flex-column gap-3">
            <input v-model="postData.login" class="form-control" type="text" autocomplete="off"
                :placeholder="isAuth ? 'Логин' : 'Придумаите логин'" required>
            <input v-model="postData.password" class="form-control" type="password" autocomplete="off"
                :placeholder="isAuth ? 'Пароль' : 'Придумайте пароль'" required>
            <input v-if="!isAuth" v-model="repeatPassword" class="form-control" type="password" autocomplete="off"
                placeholder="Повторите пароль">
            <button @click="isAuth = !isAuth" class="toggle_btn" type="button">{{ isAuth ? 'Регистрироваться' :
                'Авторизоваться' }}</button>
            <button type="submit" class="btn btn-primary">{{ isAuth ? 'Воити' : 'Регистрироваться' }}</button>
        </form>
    </main>
</template>

<style scoped>
.toggle_btn {
    padding: 0;
    width: max-content;
    text-decoration: underline;
    font-size: 14px;
    border: none;
    background-color: transparent;
}
</style>
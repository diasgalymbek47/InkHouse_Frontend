<script setup>
import Logo from "@/assets/icons/Logo.vue";
import { watch, ref } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();
const user = ref(null);
const userActive = ref(false);
watch(route, () => {
    const storeUser = localStorage.getItem('user');
    if (storeUser) {
        user.value = JSON.parse(storeUser);
    }
}, { immediate: true })

const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
}
</script>

<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg">
            <div class="container d-flex align-items-center position-relative">
                <RouterLink to="/" class="d-flex align-items-center text-decoration-none gap-2 pt-4 pb-4">
                    <Logo />
                    <h1 class="logo_text m-0">Ink House</h1>
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav align-items-lg-center gap-5 pt-3 pb-3 pt-lg-0 pb-lg-0">
                        <li class="nav_item">
                            <RouterLink class="nav_link" to="/products">Репродукции</RouterLink>
                        </li>
                        <li class="nav_item">
                            <RouterLink class="nav_link" to="/about">О нас</RouterLink>
                        </li>
                        <li class="nav_item">
                            <RouterLink class="nav_link" to="/basket">Корзина</RouterLink>
                        </li>
                        <li class="nav_item">
                            <span v-if="user" @click="userActive = !userActive" class="user"></span>
                            <RouterLink v-else class="nav_link" to="/auth"> Воити </RouterLink>
                            <div v-if="userActive" class="user_actions d-flex flex-column gap-3 p-3">
                                <span class="user_login">{{ user.login }}</span>
                                <button @click="logout" class="user_logout">Выход</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.header {
    background-color: #E1EDE6;
}

.logo_text {
    font-size: 22px;
    color: #598D66;
}

.nav_item {
    &>a {
        font-size: 17px;
        font-weight: 500;
        color: #2C2D35;
        text-decoration: none;
    }
}

.user {
    display: block;
    width: 42px;
    height: 42px;

    border-radius: 20px;
    background-color: #2C2D35;

    background-image: url('@/assets/images/free-icon-man-user.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    cursor: pointer;
}

.user_actions {
    position: absolute;
    top: 100%;
    right: 0;

    background-color: #E1EDE6;
}

.user_login {
    max-width: 320px;
    font-weight: 500;
    text-decoration: underline;
    overflow-x: hidden;
}

.user_logout {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    background-color: #598D66;
    border: none;
}
</style>
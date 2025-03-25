<script setup>
import Logo from "@/assets/icons/Logo.vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg">
            <div class="container d-flex align-items-center">
                <RouterLink to="/" class="d-flex align-items-center text-decoration-none gap-2 pt-4 pb-4">
                    <Logo />
                    <h1 class="logo_text m-0">Ink House</h1>
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav gap-5 pt-3 pb-3 pt-lg-0 pb-lg-0">
                        <li class="nav_item">
                            <RouterLink class="nav_link" to="/products">Репродукции</RouterLink>
                        </li>
                        <li class="nav_item">
                            <RouterLink class="nav_link" to="/about">О нас</RouterLink>
                        </li>
                        <li class="nav_item">
                            <RouterLink class="nav_link" to="/basket">Корзина</RouterLink>
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
</style>
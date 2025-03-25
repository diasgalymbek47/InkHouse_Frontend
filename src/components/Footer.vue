<script setup>
import Logo from '@/assets/icons/Logo.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer">
        <div class="container d-flex justify-content-between align-items-center">
            <RouterLink class="d-flex align-items-center gap-3 text-decoration-none" to="/">
                <Logo />
                <h3 class="logo_text m-0">
                    Ink House
                </h3>
            </RouterLink>
            <a class="text-decoration-none" target="_blank" href="https://github.com/">by Galymbek Dias</a>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: 20px 0;
    background-color: #E1EDE6;
}

.logo_text {
    font-weight: normal;
    color: #598D66;
    font-size: 16px;
}
</style>
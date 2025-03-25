<script setup>
import Card from '@/components/Card.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const products = ref(null);
const requestError = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5239/api/picture');
        products.value = response.data;
    } catch (error) {
        console.error("При попытке получить данных произошла ошибка: " + error.message);
        requestError.value = "При попытке получить данных произошла ошибка: " + error.message;
    }
});

</script>

<template>
    <main class="container mt-5 mb-5">
        <div v-if="products">
            <div v-if="products.length > 0">
                <h2 class="title">Репродукции</h2>
                <div class="row mt-4 mb-4">
                    <div class="mt-3 col-12 col-md-6 col-lg-4" v-for="(item, index) in products" :key="index">
                        <Card :product="item" />
                    </div>
                </div>
            </div>
            <div v-else class="d-flex flex-column align-items-center">
                <div class="img_empty_box">
                    <img src="@/assets/images/free-icon-empty-box-18880153.png" alt="empty">
                </div>
                <h2>Список товаров пока пусто</h2>
            </div>
        </div>
        <div v-else-if="!products && !requestError" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger d-flex align-items-center gap-3" role="alert">
                <img width="80" height="80" src="@/assets/images/free-icon-error-6533558.png" alt="errorIcon">
                {{ requestError }}
            </div>
        </div>
    </main>
</template>

<style scoped>
.img_empty_box {
    width: 320px;
    height: 320px;

    &>img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
}
</style>
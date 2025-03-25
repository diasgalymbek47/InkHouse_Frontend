<script setup>
import Card from '@/components/Card.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const products = ref([]);

onMounted(async () => {
    const response = await axios.get('http://localhost:5239/api/picture');
    products.value = response.data;
    console.log(response);
});

</script>

<template>
    <main class="container mt-5 mb-5">
        <h2 class="title">Репродукции</h2>
        <div class="row mt-4 mb-4">
            <div class="mt-3 col-12 col-md-6 col-lg-4" v-for="(item, index) in products" :key="index">
                <Card :product="item" />
            </div>
        </div>
    </main>
</template>

<style scoped></style>
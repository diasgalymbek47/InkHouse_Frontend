<script setup>
import Card from '@/components/Card.vue';
import { useProductsStore } from '@/stores/products';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const productsStore = useProductsStore();
const getProductsBtn = ref(false);

watch(route, async () => {
    await productsStore.getAll();

    if (!productsStore.products && productsStore.reqError) {
        getProductsBtn.value = true;
    }
}, { immediate: true });

const getProducts = async () => {
    getProductsBtn.value = false;
    await productsStore.getAll();
    if (!productsStore.products && productsStore.reqError) {
        getProductsBtn.value = true;
    }
}

</script>

<template>
    <main class="container pt-4 pb-4">
        <button v-if="getProductsBtn" @click="getProducts" class="get_products_btn p-3 mb-3">Получить товары</button>
        <div v-if="productsStore.products">
            <div v-if="productsStore.products.length > 0">
                <h2 class="title">Репродукции</h2>
                <div class="row mt-4 mb-4">
                    <div class="mt-3 col-12 col-md-6 col-lg-4" v-for="(item, index) in productsStore.products"
                        :key="index">
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
        <div v-else-if="!productsStore.products && !productsStore.reqError" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger d-flex align-items-center gap-3" role="alert">
                <img width="80" height="80" src="@/assets/images/free-icon-error-6533558.png" alt="errorIcon">
                {{ productsStore.reqError }}
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

.get_products_btn {
    width: 100%;
    font-weight: 500;
    border: 1px solid #000;
    border-radius: 6px;
    background-color: transparent;

    &:hover {
        background-color: aliceblue;
    }
}
</style>
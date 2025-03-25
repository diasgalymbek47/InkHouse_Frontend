<script setup>
import BasketCard from '@/components/BasketCard.vue';
import { useBasketStore } from '@/stores/basket';
import { RouterLink } from 'vue-router';

const basketStore = useBasketStore();
basketStore.calculateTotalSum();

const cancelOrder = () => {
    basketStore.products = [];
    basketStore.calculateTotalSum();
}
</script>

<template>
    <main class="container mt-5 mb-5">
        <div v-if="basketStore.products.length > 0" class="products">
            <h2 class="mb-3">Товары</h2>
            <BasketCard v-for="(item, index) in basketStore.products" :key="index" :product="item" />
            <div class="total_sum">
                <b>Общая сумма: </b> {{ basketStore.totalSum }} тг.
            </div>
            <div class="basket_actions d-flex gap-3">
                <button class="place">Оформить заказ</button>
                <button @click="cancelOrder" class="cancel">Отменить заказ</button>
            </div>
        </div>
        <div v-else class="empty d-flex flex-column align-items-center">
            <div class="img_box">
                <img src="@/assets/images/free-icon-cart-13539700.png" alt="empty">
            </div>
            <h2 class="mb-3">Корзина пусто</h2>
            <RouterLink to="/products">Добавьте товары в корзину</RouterLink>
        </div>
    </main>
</template>

<style scoped>
.total_sum {
    padding-top: 10px;
    border-top: 1px solid #000;
}

.basket_actions {
    margin-top: 20px;

    &>button {
        padding: 10px 15px;
        border: 1px solid #598D66;
        background-color: transparent;

        &.place {
            border-color: green;
            color: green;
        }

        &.cancel {
            border-color: orange;
            color: orange;
        }
    }
}

.img_box {
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
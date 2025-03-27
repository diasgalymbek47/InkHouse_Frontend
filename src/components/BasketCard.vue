<script setup>
import { useBasketStore } from '@/stores/basket';

const props = defineProps({
    product: Object
});

const basketStore = useBasketStore();

const removeInBasket = () => {
    basketStore.products = basketStore.products.filter(p => p.id !== props.product.id);
    basketStore.calculateTotalSum();
}
</script>

<template>
    <div class="d-flex align-items-center gap-4 mt-3 mb-3">
        <div class="card_img">
            <img :src="product.urlImage" alt="Picture">
        </div>
        <div class="card_info d-flex flex-grow-1 justify-content-between">
            <div class="d-flex flex-column justify-content-between gap-3">
                <span class="card_author">{{ product.author }}</span>
                <span class="card_name">{{ product.name }}</span>
            </div>
            <span class="card_price align-content-center">
                {{ product.price }} тг.
            </span>
        </div>
        <div class="card_actions">
            <button @click="removeInBasket" class="card_delete">
                Удалить
            </button>
        </div>
    </div>
</template>

<style scoped>
.card_img {
    width: 80px;
    height: 80px;
    background-color: #333;
    border-radius: 10px;

    &>img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;

        border-radius: 10px;
    }
}

.card_delete {
    padding: 10px 15px;
    color: #ec6460;
    border: 1px solid #ec6460;
    background-color: transparent;
}
</style>
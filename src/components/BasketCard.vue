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
    <div class="item d-flex align-items-center gap-4 mt-sm-3 mb-sm-3 mt-5 mb-5 flex-wrap flex-sm-nowrap">
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
.item {
    @media (max-width: 576px) {
        padding: 10px;
        background-color: #e7e7e7;
        border-radius: 5px;
    }
}

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

.card_info {
    @media (max-width: 576px) {
        width: 100%;
    }
}
</style>
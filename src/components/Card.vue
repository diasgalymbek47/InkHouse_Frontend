<script setup>
import { useBasketStore } from '@/stores/basket';
import { ref } from 'vue';

const props = defineProps({
    product: Object
});

const isSelected = ref(false);
const basketStore = useBasketStore();

if (basketStore.products.some(p => p.id === props.product.id)) {
    isSelected.value = true;
}

const addToBasket = () => {
    isSelected.value = !isSelected.value;
    if (isSelected.value) {
        basketStore.products.push(props.product);
    } else {
        basketStore.products = basketStore.products.filter(p => p.id !== props.product.id);   
    }
}
</script>

<template>
    <div class="card">
        <div class="card_head">
            <img class="card_img" :src="product.urlImage" alt="Picture">
        </div>
        <div class="card_body">
            <span class="card_author">{{ product.author }}</span>
            <span class="card_name">{{ product.name }}</span>
            <span class="card_params">{{ product.props }}</span>
            <span class="card_price">{{ product.price }} тг.</span>
            <button @click="addToBasket" :class="isSelected ? 'card_btn selected' : 'card_btn'">
                {{ isSelected ? 'Добавлено' : 'В корзину' }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #E1EDE6;
    border: none;
    border-radius: 0px;
}

.card_img {
    width: 100%;
    object-fit: contain;
    object-position: center;
}

.card_body {
    display: flex;
    flex-direction: column;
}

.card_author {
    margin-top: 15px;
    font-size: 18px;
    color: #86928B;
}

.card_name {
    margin-top: 5px;
    font-weight: 500;
    font-size: 20px;
    color: #2C2D35;
}

.card_params {
    margin-top: 5px;
    font-size: 16px;
    color: #2C2D35;
}

.card_price {
    margin-top: 20px;
    font-size: 18px;
    color: #598D66;
}

.card_btn {
    padding: 15px 25px;
    margin-top: 30px;
    color: #598D66;
    border: 1px solid #598D66;
    background-color: transparent;

    &.selected {
        background-color: #598D66;
        color: #fff;
    }
}
</style>
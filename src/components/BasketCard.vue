<script setup></script>

<template>
    <div class="d-flex align-items-center gap-4 mt-3 mb-3">
        <div class="card_img">
            <img src="" alt="">
        </div>
        <div class="card_info d-flex flex-grow-1 justify-content-between">
            <div class="d-flex flex-column justify-content-between gap-3">
                <span class="card_author">Автор</span>
                <span class="card_name">Название</span>
            </div>
            <span class="card_price align-content-center">
                Цена
            </span>
        </div>
        <div class="card_actions">
            <button class="card_delete">
                Удалить
            </button>
        </div>
    </div>
</template>

<style scoped>
.card_img {
    width: 80px;
    height: 80px;

    object-fit: contain;
    object-position: center;

    border-radius: 10px;
    background-color: #333;
}

.card_delete {
    padding: 10px 15px;
    color: #ec6460;
    border: 1px solid #ec6460;
    background-color: transparent;
}
</style>
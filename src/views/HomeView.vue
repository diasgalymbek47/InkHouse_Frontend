<script setup>
import Star from '@/assets/icons/Star.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <main class="container">
        <div class="d-flex gap-3 flex-wrap flex-lg-nowrap">
            <img class="main_image" src="@/assets/images/MainImage.png" alt="MainImage">
            <div class="content d-flex flex-column justify-content-center mb-5 mb-lg-0">
                <h2 class="content_title">
                    Реплики картин от <span>Ink House</span>
                </h2>

                <p class="content_subtitle mt-2 mb-2">
                    Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные
                    цены.
                </p>

                <RouterLink class="content_link" to="/products">
                    Продукция
                </RouterLink>
            </div>
        </div>
    </main>
    <div class="about">
        <div class="container">
            <h2 class="about_title">
                <Star />
                Новая коллекция французских авторов
            </h2>
            <p class="about_text">
                Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою
                очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
                <span></span>
                Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую
                востребованность направлений прогрессивного развития.
            </p>
            <RouterLink class="about_link" to="/products">
                Ознакомиться
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.main_image{
    @media (max-width: 768px) {
        width: 100%;
    }    
}

.content_title {
    font-size: 60px;

    &>span {
        color: #598D66;
    }

    @media (max-width: 768px) {
        font-size: 32px;
    }
}

.content_subtitle {
    color: #86928B;
}

.content_link {
    margin-top: 50px;
    width: max-content;
    padding: 15px 45px;
    text-decoration: none;
    color: #598D66;
    border: 1px solid #598D66;
}

.about {
    padding: 50px 0;
    background-image: url(@/assets/images/pic_background.png);
    color: #fff;
}

.about_title {
    display: flex;
    align-items: center;
    max-width: 550px;
    margin-bottom: 30px;
    font-weight: 400;
    gap: 30px;
    color: #F4F6F5;
    font-size: 40px;

    &>svg {
        flex-shrink: 0;
    }
}

.about_text {
    max-width: 550px;

    &>span {
        display: block;
        margin: 30px 0;
    }
}

@media (max-width: 768px) {
    .about_title {
        font-size: 24px;
    }
}

.about_link {
    padding: 15px 40px;
    display: inline-block;
    margin-top: 30px;

    background-color: #EEDB6D;

    text-decoration: none;
    color: #2C2D35;
}
</style>
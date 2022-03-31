<template>
    <section class="discover section" id="discover">
        <h2 class="section__title">Temukan Lebih Banyak <br>Tempat Terbaik</h2>

        <swiper 
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }"
        :spaceBetween="32"
        :modules="modules"
        class="discover__container container">
            <swiper-slide class="discover__card">
                <img :src="require('./../../assets/images/discover1.jpg')" alt="https://unsplash.com/@ahmadprayogi" class="discover__img">
                <div class="discover__data">
                    <h2 class="discover__title">Sumatera</h2>
                    <span class="discover__description">32 Wisata Tersedia</span>
                </div>
            </swiper-slide>

            <swiper-slide class="discover__card">
                <img :src="require('./../../assets/images/discover2.jpg')" alt="Discover Image" class="discover__img">
                <div class="discover__data">
                    <h2 class="discover__title">Lombok</h2>
                    <span class="discover__description">18 Wisata Tersedia</span>
                </div>
            </swiper-slide>

            <swiper-slide class="discover__card">
                <img :src="require('./../../assets/images/discover3.jpg')" alt="Discover Image" class="discover__img">
                <div class="discover__data">
                    <h2 class="discover__title">Bali</h2>
                    <span class="discover__description">24 Wisata Tersedia</span>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Discover',
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [EffectCoverflow],
        };
    },
}
</script>

<style lang="scss">
    .discover__card{
        position: relative;
        width: 200px;
        overflow: $img-hidden;
    }

    .discover__data{
        position: absolute;
        bottom: 1.5rem;
        left: 1rem;
    }

    .discover__title,
    .discover__description{
        color: $white-color;
    }

    .discover__title{
        font-size: $h3-font-size;
        margin-bottom: $mb-0-25;
    }

    .discover__description{
        display: block;
        font-size: $smaller-font-size;
    }

    .discover__img{
        transition: $img-transition;
        &:hover{
            transform: $img-scale;
        }
    }

    .swiper-container-3d .swiper-slide-shadow-left,
    .swiper-container-3d .swiper-slide-shadow-right
    {
        background-image: none;
    }
</style>
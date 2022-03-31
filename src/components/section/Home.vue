<template>
    <section class="home" id="home">
        <img :src="require('./../../assets/images/home1.jpg')" alt="Image Home" class="home__img">
    
        <div class="home__container container grid">
            <div class="home__data">
                <span class="home__data-subtitle">
                    Temukan tempat terbaikmu
                </span>
                <h1 class="home__data-title">Jelajah Wisata Indonesia, Temukan Tempat Terbaikmu</h1>
                <router-link to="#" class="button">Jelajahi</router-link>
            </div>

            <div class="home__social">
                <router-link to="#" class="home__social-link">
                    <i class="ri-facebook-box-fill"></i>
                </router-link>
                <router-link to="#" class="home__social-link">
                    <i class="ri-instagram-fill"></i>
                </router-link>
                <router-link to="#" class="home__social-link">
                    <i class="ri-twitter-fill"></i>
                </router-link>
            </div>

            <div class="home__info">
                <div>
                    <span class="home__info-title">
                        5 tempat wisata terbaik untuk dikunjungi
                    </span>
                    <router-link to="#" class="button button--flex button--link home__info-button">
                        Lainnya <i class="ri-arrow-right-line"></i>
                    </router-link>
                </div>

                <div class="home__info-overlay">
                    <img :src="require('./../../assets/images/home2.jpg')" alt="Image Overlay" class="home__info-img">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home'
}
</script>

<style lang="scss" scoped>
    .home__img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 83%;
    }

    .home__container{
        position: relative;
        height: calc(100vh - $header-height);
        align-content: center;
        row-gap: 3rem;
    }

    .home__data-subtitle,
    .home__data-title,
    .home__social-link,
    .home__info{
        color: $white-color;
    }

    .home__data-subtitle{
        display: block;
        font-weight: $font-semi-bold;
        margin-bottom: $mb-0-75;
    }

    .home__data-title{
        font-size: $biggest-font-size;
        font-weight: $font-medium;
        margin-bottom: $mb-2-5;
    }

    .home__social{
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
    }

    .home__social-link{
        font-size: 1.2rem;
        width: max-content;
    }

    .home__info{
        background-color: $first-color;
        display: flex;
        padding: 1.5rem 1rem;
        align-content: center;
        column-gap: .5rem;
        position: absolute;
        right: 0;
        bottom: 1rem;
        width: 228px;
    }

    .home__info-title{
        display: block;
        font-size: $small-font-size;
        font-weight: $font-semi-bold;
        margin-bottom: $mb-0-75;
    }

    .home__info-button{
        font-size: $smaller-font-size;
    }

    .home__info-overlay{
        overflow: $img-hidden;
        display: flex;
        align-content: center;
    }

    .home__info-img{
        width: 194px;
        transition: $img-transition;

        &:hover{
            transform: $img-scale;
        }
    }
</style>
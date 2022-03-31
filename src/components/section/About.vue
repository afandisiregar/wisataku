<template>
    <section class="about section" id="about">
        <div class="about__container container grid">
            <div class="about__data">
                <h2 class="section__title about__title">
                    Informasi Lainnya <br> Tentang wisata terbaik
                </h2>
                <p class="about__description">
                    Pesona Bahari Nusantara yang dapat dirasakan. Menikmati sisi lain keindahan wisata. Tidak perlu menunggu lama silahkan pesan sekarang
                </p>
                <router-link to="#" class="button">Pesan Tempat Sekarang</router-link>
            </div>
            <div class="about__img">
                <div class="about__img-overlay">
                    <img :src="require('./../../assets/images/about1.jpg')" alt="https://unsplash.com/@yimoooon" class="about__img-one">
                </div>

                <div class="about__img-overlay">
                    <img :src="require('./../../assets/images/about2.jpg')" alt="https://unsplash.com/@zulkipe" class="about__img-two">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'About'
}
</script>

<style lang="scss" scoped>
    .about__data{
        text-align: center;
    }

    .about__container{
        row-gap: 2.5rem;
    }

    .about__description{
        margin-bottom: $mb-2;
    }

    .about__img{
        display: flex;
        column-gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    .about__overlay{
        overflow: $img-hidden;
    }

    .about__img-one{
        width: 130px;
    }

    .about__img-two{
        width: 180px;
    }

    .about__img-one,
    .about__img-two{
        transition: $img-transition;

        &:hover{
            transform: $img-scale;
        }
    }
</style>
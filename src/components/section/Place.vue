<template>
    <section class="place section" id="place">
        <h2 class="section__title">Pilih Tempat Terbaikmu</h2>
    
        <div class="place__container container grid">
            <div class="place__card">
                <img :src="require('./../../assets/images/place1_kelingking_bali.jpg')" alt="Wisata Image" class="place__img">
            
                <div class="place__content">
                    <div class="place__rating">
                        <i class="ri-star-line place__rating-icon"></i>
                        <span class="place__rating-nu">4,8</span>
                    </div>

                    <div class="place__data">
                        <h3 class="place__title">Pantai Kelingking</h3>
                        <span class="place__subtitle">Bali, Indonesia</span>
                    </div>
                </div>

                <router-link to="/wisata/pantai-kelingking" class="button button--flex place__button">
                    <i class="ri-arrow-right-line"></i>
                </router-link>
            </div>

            <div class="place__card">
                <img :src="require('./../../assets/images/place2_amed_bali.jpg')" alt="Wisata Image" class="place__img">
            
                <div class="place__content">
                    <div class="place__rating">
                        <i class="ri-star-line place__rating-icon"></i>
                        <span class="place__rating-nu">5,0</span>
                    </div>

                    <div class="place__data">
                        <h3 class="place__title">Pulau Amed</h3>
                        <span class="place__subtitle">Bali, Indonesia</span>
                    </div>
                </div>

                <router-link to="wisata/pantai-kelingking" class="button button--flex place__button">
                    <i class="ri-arrow-right-line"></i>
                </router-link>
            </div>
            
            <div class="place__card">
                <img :src="require('./../../assets/images/place3_rinjai_lombok.jpg')" alt="Wisata Image" class="place__img">
            
                <div class="place__content">
                    <div class="place__rating">
                        <i class="ri-star-line place__rating-icon"></i>
                        <span class="place__rating-nu">4,9</span>
                    </div>

                    <div class="place__data">
                        <h3 class="place__title">Gunung Rinjani</h3>
                        <span class="place__subtitle">Lombok, Indonesia</span>
                    </div>
                </div>

                <router-link to="wisata/pantai-kelingking" class="button button--flex place__button">
                    <i class="ri-arrow-right-line"></i>
                </router-link>
            </div>

            <div class="place__card">
                <img :src="require('./../../assets/images/place4_gilinanggu_lombok.jpg')" alt="Wisata Image" class="place__img">
            
                <div class="place__content">
                    <div class="place__rating">
                        <i class="ri-star-line place__rating-icon"></i>
                        <span class="place__rating-nu">4,7</span>
                    </div>

                    <div class="place__data">
                        <h3 class="place__title">Gili Nanggu</h3>
                        <span class="place__subtitle">Lpmbok, Indonesia</span>
                    </div>
                </div>

                <router-link to="wisata/pantai-kelingking" class="button button--flex place__button">
                    <i class="ri-arrow-right-line"></i>
                </router-link>
            </div>

            <div class="place__card">
                <img :src="require('./../../assets/images/place5_laketoba_sumaterautara.jpg')" alt="Wisata Image" class="place__img">
            
                <div class="place__content">
                    <div class="place__rating">
                        <i class="ri-star-line place__rating-icon"></i>
                        <span class="place__rating-nu">5,0</span>
                    </div>

                    <div class="place__data">
                        <h3 class="place__title">Danu Toba</h3>
                        <span class="place__subtitle">Sumatera Utara, Indonesia</span>
                    </div>
                </div>

                <router-link to="wisata/pantai-kelingking" class="button button--flex place__button">
                    <i class="ri-arrow-right-line"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Place'
}
</script>

<style lang="scss" scoped>
    .place__card,
    .place__img{
        height: 230px;
    }

    .place__container{
        grid-template-columns: repeat(2, max-content);
        justify-content: center;
    }

    .place__card{
        position: relative;
        overflow: $img-hidden;
    }

    .place__content,
    .place__title
    {
        color: $white-color;
    }

    .place__content{
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% - 23px);
        height: calc(100% - 29px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .75rem .75rem 1rem;
    }

    .place__rating{
        align-self: flex-end;
        display: flex;
        align-items: center;
    }

    .place__rating-icon{
        font-size: .75rem;
        margin-right: $mb-0-25;
    }

    .place__rating-number{
        font-size: $small-font-size;
    }

    .place__subtitle,
    .place__price{
        display: block;
    }

    .place__title{
        font-size: $h3-font-size;
        margin-bottom: $mb-0-25;
    }

    .place__subtitle{
        font-size: $smaller-font-size;
        margin-bottom: $mb-1-25;
    }

    .place__button{
        position: absolute;
        right: 0;
        bottom: 0;
        padding: .25rem 1rem;
    }

    .place__img{
        transition: $img-transition;
    }

    .place__card:hover, .place__img{
        transform: $img-scale;
    }
</style>
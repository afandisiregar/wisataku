<template>
    <footer class="footer section">
        <div class="footer__container container grid">
            <div class="footer__content grid">
                <div class="footer__data">
                    <h3 class="footer__title">
                        Wisataku
                    </h3>
                    <p class="footer__description">
                        Memilih wisata terbaik dapat menambah pengalamanmu dalam menjelejahai indonesia
                    </p>

                    <div>
                        <router-link to="#" class="footer__social">
                            <i class="ri-facebook-box-fill"></i>
                        </router-link>
                        <router-link to="#" class="footer__social">
                            <i class="ri-instagram-fill"></i>
                        </router-link>
                        <router-link to="#" class="footer__social">
                            <i class="ri-twitter-fill"></i>
                        </router-link>
                    </div>
                </div>

                <div class="footer__data">
                    <h3 class="footer__subtitle">About</h3>

                    <ul>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                Tentang Kami
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                Fitur
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                Berita
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="footer__data">
                    <h3 class="footer__subtitle">Perusahaan</h3>

                    <ul>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                Tim
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                Planning
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                Menjadi Member
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="footer__data">
                    <h3 class="footer__subtitle">Support</h3>

                    <ul>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                FAQ
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                Support Centre
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="#" class="footer__link">
                                Hubungi Kami
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer__rights">
                    <p class="foooter__copy">&#169; 2022 Siregar. All rights reserved.</p>
                    <div class="footer__terms">
                        <router-link to="#" class="footer__terms-link">Syarat &#38; Ketentuan</router-link>
                        <router-link to="#" class="footer__terms-link">Kebijakan Privasi</router-link>
                    </div>
                </div>
        </div>
    </footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    .footer__container{
        row-gap: 5rem;
    }

    .footer__content{
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        row-gap: 2rem;
    }

    .footer__title,
    .footer__subtitle{
        font-size: $h3-font-size;
    }

    .footer__title{
        margin-bottom: $mb-0-5;
    }

    .footer__description{
        margin-bottom: $mb-2;
    }

    .footer__social{
        font-size: 1.25rem;
        color: $title-color;
        margin-right: $mb-1-25;
    }

    .footer__subtitle{
        margin-bottom: $mb-1;
    }

    .footer__item{
        margin-bottom: $mb-0-75;
    }

    .footer__link{
        color: $text-color;

        &:hover{
            color: $title-color;
        }
    }

    .footer__rights{
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
        text-align: center;
    }

    .footer__copy,
    .footer__terms-link{
        font-size: $small-font-size;
        color: $text-color-light;
    }

    .footer__terms{
        display: flex;
        column-gap: 1.5rem;
        justify-content: center;

        &:hover{
            color: $text-color;
        }
    }
</style>
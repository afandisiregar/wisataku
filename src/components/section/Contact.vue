<template>
    <section class="contact section" id="contact">
        <div class="contact__bg">
            <div class="contact__container container">
                <h2 class="section__title contact__title">
                    Hubungi Kami
                </h2>
                <p class="contact__description">
                    Berikan pengalaman terbaik, setelah mengunjungi halaman ini
                </p>

                <form action="" class="contact__form">
                    <input type="text" placeholder="Masukkan Nama" class="contact__input">

                    <input type="text" placeholder="Masukkan Email" class="contact__input">

                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Masukkkan Pesan" class="contact__input-textarea"></textarea>

                    <button type="button" class="button">Kirim</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Contact'
}
</script>

<style lang="scss" scoped>
    .contact__bg{
        background-color: $first-color-second;
        padding: 2.5rem 0 ;
    }

    .contact__title,
    .contact__description{
        color: $white-color;
    }

    .contact__description{
        text-align: center;
        margin-bottom: $mb-2-5;
    }

    .contact__form{
        padding: .5rem;
        display: flex;
        flex-direction: column;
        row-gap:1rem;
    }

    .contact__input{
        height: 1.5rem;
    }

    .contact__input-textarea, .contact__input{
        padding: .5rem;
        background-color: $input-color;
        color: $text-color;
        border-radius: 8px;
        font-size: $small-font-size;

        &::placeholder{
            color: $text-color;
            font-size: $small-font-size;
        }
    }
</style>
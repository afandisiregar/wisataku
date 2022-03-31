<template>
    <header class="header" id="header">
        <nav class="nav container">
            <router-link to="#" class="nav__logo">Wisataku</router-link>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#home" class="nav__link" @click="navLink">
                            Beranda
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link" @click="navLink">
                            Tentang
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#discover" class="nav__link" @click="navLink">
                            Temukan Wisata
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#place" class="nav__link" @click="navLink">
                            Tempat Wisata
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#contact" class="nav__link" @click="navLink">
                            Hubungi
                        </a>
                    </li>
                </ul>

                <i class="ri-close-line nav__close" id="nav-close" @click="navClose"></i>
            </div>

            <div class="nav__toggle" id="nav-toggle" @click.prevent="navToggle">
                <i class="ri-function-line"></i>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar',
    methods: {
        navToggle() {
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.toggle('show-menu')
        },
        navClose() {
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show-menu')
        },
        navLink() {
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show-menu')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
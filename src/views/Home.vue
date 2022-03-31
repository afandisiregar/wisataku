<template>
  <Navbar />
  <main class="main">
    <SectionHome />
    <SectionAbout />
    <SectionDiscover />
    <SectionPlace />
    <SectionContact />
    <SectionFooter />
  </main>
  <a href="#" class="scrollup" id="scroll-up" @click="scrollUp">
    <i class="ri-arrow-up-s-line scrollup__icon"></i>
  </a>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import SectionHome from './../components/section/Home.vue'
import SectionAbout from './../components/section/About.vue'
import SectionDiscover from './../components/section/Discover.vue'
import SectionPlace from './../components/section/Place.vue'
import SectionContact from './../components/section/Contact.vue'
import SectionFooter from './../components/section/Footer.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {
    Navbar,
    SectionHome,
    SectionAbout,
    SectionDiscover,
    SectionPlace,
    SectionContact,
    SectionFooter
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    this.getWheaters()
  },
  methods: {
    getWheaters() {
      this.$store.dispatch('wheater/fetchWheaters')
      .then(response => {
        console.log(response);
      })
    },
    updateScroll() {
      const header = document.getElementById('header')
      const scrollUp = document.getElementById('scroll-up')
      const sections = document.querySelectorAll('section[id]')
      
      if (window.scrollY >= 140) {
        header.classList.add('scroll-header')
        scrollUp.classList.add('show-scroll')
      }else{
        header.classList.remove('scroll-header')
        scrollUp.classList.remove('show-scroll')
      }

      const scrollY = window.pageYOffset

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50

        const sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
      })
    },
  }
}
</script>
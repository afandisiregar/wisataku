<template>
    <header class="header" id="header">
        <nav class="nav container">
            <router-link to="/" class="nav__logo">
              <i class="ri-arrow-left-s-line icon-back-arrow"></i>
              Kembali
            </router-link>
        </nav>
    </header>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'NavbarDetail'
}
</script>

<style lang="scss" scoped>
  .nav__logo{
    display: flex;
    align-items: center;
  }
  
  .icon-back-arrow{
      margin-right: .5rem;
  }
</style>
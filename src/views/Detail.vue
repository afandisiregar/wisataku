<template>
    <NavbarDetail class="scroll-header"/>
    <main class="main">
      <section class="detail__header">
         <img :src="require('./../assets/images/detail-place-1.jpg')" alt="https://unsplash.com/@reallynattu" class="detail__photo-img">

         <div class="detail__header-container container">
           <div class="detail__data">
             <h1 class="detail__data-title">Pantai Kelingking</h1>
             <span class="detail__data-location">
               <i class="ri-map-pin-fill icon__location"></i>
               Klungkung Regency, Bali
             </span>

             <div class="detail__data-feature">
               <span class="data-feature">
                 <i class="ri-ticket-fill icon-feature"></i>
                 Tiket Pesawat
               </span>

               <span class="data-feature">
                 <i class="ri-hotel-fill icon-feature"></i>
                 Penginapan
               </span>

               <span class="data-feature">
                 <i class="ri-car-fill icon-feature"></i>
                 Transpotasi
               </span>
             </div>

             <div class="detail__data-description">
               <h6 class="title-description">
                 Deksripsi
               </h6>
               <p class="data-description">
                 Kamu mungkin tahu kalau pemandangan dari atas tebing di Kelingking Beach sangat indah dan magis. Enggak heran, kebanyakan wisatawan datang ke sini untuk menikmati panorama pantai di Nusa Penida ini sambil foto-foto dengan background tebingnya yang unik.
               </p>
               <p class="data-description">
                 Tapi tau gak sih, kamu sebenarnya bisa turun mengikuti tangganya yang curam sampai ke pantainya di dasar? Memang masih jarang banget turis yang mau susah payah melakukannya karena memang sangat melelahkan. Tapi ketika kamu sampai di dasar, pantai di Kelingking Beach ini benar-benar akan membayar semua usaha kamu!
               </p>
               <p class="data-description">
                 Dengan jumlah pengunjung yang sedikit, kamu bisa menikmati pasir putih yang halus dan air yang biru kehijauan di Kelingking Beach sesuka hati!
               </p>
             </div>
           </div>

           <div class="detail__card-price">
               <div class="detail__card-info">
                 <div class="card__info-price">
                   <h5 class="info__price-amount">
                     Rp1.406.700
                   </h5>
                   <span class="info__price-unit">
                     / hari
                   </span>
                 </div>

                 <div class="price-room-sub">
                    1 Tiket untuk 1 orang
                  </div>

                 <button class="button button__order-now" type="button">Pesan Sekarang</button>
               </div>
             </div>
         </div>

         <div class="card__price-footer">
           <div class="card__price-footer-wrapper">
             <div class="footer-room">
               <span class="price-room">
                 Rp. 1.406.700 / hari
               </span>
               <div class="price-room-sub">
                 1 Tiket untuk 1 orang
               </div>
             </div>
             <div class="footer-button">
               <button type="button" class="button button__order">
                 Pesan Sekarang
               </button>
             </div>
           </div>
         </div>
      </section>
    </main>
</template>

<script>
import NavbarDetail from './../components/NavbarDetail.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Detail',
    components: {
        NavbarDetail
    },
}
</script>

<style lang="scss" scoped>
  .header__detail{
      background-color: #faffff;
      box-shadow: 0 0 4px rgb(14 63 59 / 15%);
  }

  .detail__header-container{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .detail__data-location{
    display: flex;
    align-items: center;
  }

  .icon__location{
    margin-right: .5rem;
  }

  .detail__data-location{
    font-size: $normal-font-size;
    margin-bottom: $mb-1;
  }

  .detail__data-title{
    font-size: $h1-font-size;
    margin-bottom: $mb-0-75;
  }

  .detail__data-description{
    padding-top: .5rem;
    border-top: 1px solid $text-color;
  }

  .title-description{
    font-size: $normal-font-size;
    margin-bottom: $mb-0-5;
  }

  .data-description{
    font-size: $small-font-size;
    text-align: justify;

    &:not(:last-child) {
      margin-bottom: $mb-0-5;
    }
  }

  .card__price-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFF;
    box-shadow: 0 -3px 6px 0 hsl(0deg 4% 66% / 16%);
    z-index: 1030;
  }

  .card__price-footer-wrapper{
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
  }

  .price-room{
    font-weight: $font-semi-bold;
  }

  .price-room-sub{
    font-size: $smaller-font-size;
  }

  .button__order{
    border-radius: 8px;
    font-size: $small-font-size;
  }

  .detail__card-price{
    margin-left: 1rem;
    width: 100%;
  }

  .detail__card-info{
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 -2px 40px rgb(0 0 0 / 4%), 0 16px 40px rgb(0 0 0 / 6%);
    font-size: $normal-font-size;
    font-weight: $font-semi-bold;
    line-height: 20px;
    padding: 1rem;
  }

  .card__info-price{
    display: flex;
    align-items: center;
    margin-bottom: $mb-0-5;
  }

  .info__price-amount{
    font-size: $h2-font-size;
    font-weight: bold;
    margin-right: .5rem;
  }

  .info__price-unit{
    font-weight: $font-medium;
  }

  .button__order-now{
    width: 100%;
    margin-top: 16px;
    border-radius: 8px;
  }

  .detail__data-feature{
    display: flex;
    align-items: center;
    margin-bottom: $mb-1;
  }

  .data-feature{
    display: flex;
    align-items: center;
    font-size: $small-font-size;
    
    &:not(:last-child) {
      margin-right: .5rem;
    }
  }

  .icon-feature{
    font-size: $small-font-size;
    margin-right: .5rem;
  }

  @media screen and (max-width:720px) {
    .detail__header-container{
      display: block;
    }

    .detail__card-price{
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    .card__price-footer{
      display: none;
    }
  }

  @media screen and (min-width:1200px) { 
    .container{
      max-width: 1175px !important;
    }
  }
</style>
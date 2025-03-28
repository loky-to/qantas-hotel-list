<template>
    <a href="https://www.qantas.com" target="_blank" class="hotel-listing-item">
      <div class="hotel-listing-item__lhs">
        <div 
            class="hotel-listing-item__lhs-image"
            :style="{
                backgroundImage: `url(${image})`
            }"
        >
            <div 
                v-if="hotel.offer.promotion"
                class="hotel-listing-item__lhs-promo-banner"    
            >
                <span>{{ promo }}</span>
            </div>
        </div>
    </div>
    <div class="hotel-listing-item__rhs">
      <div class="hotel-listing-item__rhs-details">
          <div class="hotel-listing-item__rhs-details-title">
              <span>
                  {{ hotelName }}
              </span>
              <div class="hotel-listing-item__rhs-rating" :class="ratingType">
                  <span v-for="(n, index) in 5" :key="index" class="hotel-listing-item__rhs-rating-shape-wrapper">
                      <span class="hotel-listing-item__rhs-rating-shape" :class="{
                          filled: n <= Math.floor(rating), 
                          half: n - 0.5 === rating
                      }" />
                      <!-- only catered for no fill, full fill and half fill stars and circles -->
                  </span>
              </div>
          </div>
          <span class="hotel-listing-item__rhs-details-address">
              {{ address }}
          </span>
          <span class="hotel-listing-item__rhs-details-room-type">
              {{ roomType }}
          </span>
          <span 
              v-if="cancellation !== ''"
              class="hotel-listing-item__rhs-details-cancellation"
          >
              {{ cancellation }}
          </span>
      </div>
      <div class="hotel-listing-item__rhs-price-details">
          <span class="hotel-listing-item__rhs-currency">
              <b>1</b> night total ({{ currency }})
          </span>
          <div class="hotel-listing-item__rhs-price">
            <!-- price symbol should be enhanced by using currency converter -->
              <span class="hotel-listing-item__rhs-price-symbol">
                  $ 
              </span>
              <span class="hotel-listing-item__rhs-price-amount">
                  {{ price }}
              </span>
          </div>
          <span 
              v-if="saving"
              class="hotel-listing-item__rhs-savings"
          >
            <!-- price symbol should be enhanced by using currency converter -->
              Save ${{ saving }}<span class="hotel-listing-item__rhs-savings-super">~</span>
          </span>
      </div>
    </div>
    </a>
  </template>
  
  <script>
  export default {
    name: 'HotelListingItem',
    data: function () {
        return {
            image: '',
            promo: null,
            hotelName: '',
            rating: 0,
            ratingType: 'stars',
            address: '',
            roomType: '',
            cancellation: '',
            currency: '',
            price: 0,
            saving: null,
        }
    },
    components: {
    },
    props: {
        hotel: Object,
    },
    mounted () {
        const hotelProperty = this.hotel.property
        const hotelOffer = this.hotel.offer

        this.promo = hotelOffer.promotion ? hotelOffer.promotion.title : null
        this.image = hotelProperty.previewImage.url
        this.hotelName = hotelProperty.title
        this.rating = hotelProperty.rating.ratingValue
        if (hotelProperty.rating.ratingType === 'self') this.ratingType = 'circles'
        this.address = `${hotelProperty.address[0]}, ${hotelProperty.address[1]}`
        this.roomType = hotelOffer.name
        if (hotelOffer.cancellationOption.cancellationType === 'FREE_CANCELLATION') this.cancellation = 'Free cancellation'
        this.currency = hotelOffer.displayPrice.currency
        this.price = hotelOffer.displayPrice.amount
        if (hotelOffer.savings !== null) this.saving = hotelOffer.savings.amount
    },
  };
  </script>
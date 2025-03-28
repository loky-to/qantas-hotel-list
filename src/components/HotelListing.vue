<template>
    <div class="hotel-listing">
      <HotelListingItem
        v-for="hotel in hotels"
        :key="hotel.id"
        :hotel="hotel"
      />
      <!-- could add pagination -->
    </div>
  </template>
  
  <script>
  import HotelListingItem from './HotelListingItem.vue';
  export default {
    name: 'HotelListing',
    components: {
        HotelListingItem,
    },
    props: {
        hotels: Array,
    },
  };
  </script>
  
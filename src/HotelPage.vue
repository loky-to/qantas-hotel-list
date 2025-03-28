<template>
  <div id="app" class="hotel-page">
    <HotelHeader
      :hotelCount="hotelCount"
      :field="{
        options: sortOptions,
        type: 'F_SELECT',
        label: 'Sort by',
      }"
    />
    <HotelListing
      :hotels="sortedHotels"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import data from './mock/data.json';
import HotelHeader from './components/HotelHeader';
import HotelListing from './components/HotelListing';

export default {
  name: 'HotelPage',
  components: {
    HotelHeader,
    HotelListing,
  },
  data: function () {
    return {
      sortOptions: [
        { value: 'ASC', label: 'Price low-high' },
        { value: 'DESC', label: 'Price high-low' },
      ],
      hotelCount: 0,
    };
  },
  mounted() {
    this.mockData = data;
    console.log('mock data', this.mockData.results);
    console.log('sorted hotels', this.sortedHotels);
    this.hotelCount = this.hotels.length;
  },
  computed: {
    ...mapState(['hotels']), // Access the 'hotels' state
    ...mapGetters(['sortedHotels']), // Access the sorted hotels getter
  },
  methods: {
  },
};
</script>

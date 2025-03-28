<template>
  <div class="hotel-header">
    <a href="https://www.qantas.com">
      <img src="images/qantas-logo.png" alt="Logo" />
    </a>
    <BaseHeader :field="field">
      <div class="hotel-header__lhs-text">
        <span class="hotel-header__lhs-text -bold">{{ hotelCount }}</span>
        <span class="hotel-header__lhs-text -italic"> hotels in </span>
        <span class="hotel-header__lhs-text -bold">Sydney.</span>
        <!-- Sydney is hard coded in, expect this to be returned by API in prod-->
      </div>
    </BaseHeader>
  </div>
</template>

<script>
import BaseHeader from '../shared-vue/BaseHeader.vue';
export default {
  name: 'HotelHeader',
  components: {
    BaseHeader,
  },
  props: {
    field: Object,
    hotelCount: Number,
  },
};
</script>

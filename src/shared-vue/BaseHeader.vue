<template>
  <div class="base-header">
    <slot />
    <FormFields id="base-header-select" :field="field"/>
  </div>
</template>

<script>
import FormFields from './FormFields';
export default {
  name: 'BaseHeader',
  components: {
    FormFields,
  },
  props: {
    field: Object,
  },
};
</script>

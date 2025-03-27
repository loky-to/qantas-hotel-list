<template>
  <div v-if="field.type === 'F_SELECT'" :key="`field-${id}`" class="form-fields">
    <FieldSelect
      :id="`${id}-form-fields-select-${field.key}`"
      :key="`${id}-form-fields-select-${field.key}`"
      :options="field.options"
      :closeOnSelect="true"
      :label="field.label"
      :size="field.size ? field.size : '20'"
      :color="field.color ? field.color : 'default'"
      :class="field.classes ? field.classes : ''"
      :selectedValue="sortOrder"
      @updateSelectedValue="updateSortOrder"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FieldSelect from './FieldSelect';
export default {
  name: 'FormFields',
  components: {
    FieldSelect,
  },
  props: {
    id: String,
    field: Object,
  },
  computed: {
    ...mapState(["sortOrder"]), // Map Vuex state to the component
  },
  methods: {
    ...mapActions(['updateSortOrder']), // Map Vuex action
    updateSortOrder(value) {
      if (value !== this.sortOrder) {
        this.$store.dispatch("updateSortOrder", value); // Dispatch Vuex action to update store
      }
    },
  },
};
</script>

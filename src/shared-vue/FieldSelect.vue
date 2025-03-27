<template>
  <div class="field-select">
    <label :key="id" :class="`-size-${size}`">{{ label }}</label>
    <select
      :id="id"
      :class="`-color-${color}`"
      :value="selectedValue"
      @change="onChange"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FieldSelect',
  props: {
    options: Array,
    label: String,
    id: String,
    size: String,
    color: String,
    classes: String,
    selectedValue: String
  },
  methods: {
    onChange(event) {
      const newValue = event.target.value;
      if (newValue !== this.selectedValue) {
        this.$emit("updateSelectedValue", newValue);
      }
    },
  },
};
</script>

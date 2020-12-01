<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    class="field"
    @input="emitValue"
  />
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  created() {
    console.log(this.$attrs);
  },
  methods: {
    emitValue(e) {
      let newValue = e.target.value;
      this.$emit("update:modelValue", newValue);
    }
  }
};
</script>

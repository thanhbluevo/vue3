<template>
  <div class="date-picker">
    <input
      type="datetime"
      v-bind="$attrs"
      class="field"
      placeholder="Choose Date"
    />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "DatePicker"
};
</script>

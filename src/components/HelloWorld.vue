<template>
  <h1
    class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
  >
    {{ msg }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    return {};
  },
});
</script>

<style scoped></style>

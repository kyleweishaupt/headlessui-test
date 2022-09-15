<template>
  <div class="text-gray-500 mb-4 bg-gray-200 shadow-sm px-4 py-4 rounded">
    <router-link
      to="/"
      class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4"
      active-class="bg-gray-900 text-white"
      >Home</router-link
    >
    <router-link
      to="/about"
      class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4"
      active-class="bg-gray-900 text-white"
      >About</router-link
    >
    <router-link
      to="/async"
      class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      active-class="bg-gray-900 text-white"
      >Async</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationBar",
  setup: () => {
    return {};
  },
});
</script>

<style scoped></style>

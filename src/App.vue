<template>
  <nav-menu />
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <img alt="Vue logo" src="@/assets/logo.png" class="mx-auto" />
    <navigation-bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import NavMenu from "@/components/NavMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    NavigationBar,
    NavMenu,
  },
});
</script>

<style></style>

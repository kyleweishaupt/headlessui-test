<template>
	<div class="container mx-auto">
		<img
			alt="Vue logo"
			src="./assets/logo.png"
		/>
		<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

		<div class="mt-3 flex sm:mt-0 sm:ml-4">
			<Counter />
			<Menu />
		</div>
	</div>
	<router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import Menu from "./components/Menu.vue";

export default defineComponent({
	name: "App",
	components: {
		HelloWorld,
		Counter,
		Menu,
	},
});
</script>

<style>
</style>
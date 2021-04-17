<template>
	<div>
		<p>Count is: {{ count }}</p>

		<button
			@click="decrement"
			class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75"
		>-</button>

		<button
			@click="increment"
			class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75"
		>+</button>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
const store = useStore();

export default defineComponent({
	name: "Counter",
	setup: () => {
		return {
			count: computed(() => store.state.counter),
			increment: () => store.commit("increment"),
			decrement: () => store.commit("decrement"),
		};
	},
});
</script>

<style scoped>
</style>
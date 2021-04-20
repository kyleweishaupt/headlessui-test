<template>
	<div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
		<div class="ml-4 mt-4">
			<p>Count is: {{ count }}</p>
		</div>
		<div class="ml-4 mt-4 flex-shrink-0">
			<button
				@click="decrement"
				:disabled="count <= 0"
				class="disabled:opacity-50 disabled:cursor-not-allowed mr-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75"
			>-</button>

			<button
				@click="increment"
				:disabled="count >= 10"
				class="z-0 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75"
			>+</button>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "Counter",
	setup: () => {
		const store = useStore();

		return {
			count: computed(() => store.getters.count),
			increment: () => store.commit("increment"),
			decrement: () => store.commit("decrement"),
		};
	},
});
</script>

<style scoped>
</style>
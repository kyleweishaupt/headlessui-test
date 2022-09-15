<template>
  <div>
    <div class="flex justify-between items-center gap-x-4">
      <h1 class="text-2xl font-semibold mb-4">Async Test</h1>

      <button
        type="button"
        @click="refresh"
        :disabled="loading"
        :class="{ 'opacity-50 cursor-wait': loading }"
        class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span v-if="!loading"> Refresh </span>
        <span v-else> Loading... </span>
      </button>
    </div>

    <h2
      v-if="loading && objects.length <= 0"
      class="font-semibold text-blue-500"
    >
      Loading...
    </h2>
    <ul v-else>
      <li v-for="object in objects" :key="object.name">
        {{ object.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getObjects");
    });

    return {
      refresh: () => store.dispatch("getObjects"),
      objects: computed(() => store.getters.objects),
      loading: computed(() => store.getters.loading),
    };
  },
});
</script>

<template>
  <div>
    <HelloWorld msg="Hello World!" />
    <div
      class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 shadow-sm mb-4"
    >
      <div
        class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
      >
        <div class="ml-4 mt-4">
          <p class="text-gray-400">
            Vue 3 + TypeScript + Vite + Headless UI + Tailwind UI
          </p>
        </div>
        <div class="ml-4 mt-4 flex-shrink-0">
          <DropDown />
        </div>
      </div>
    </div>
    <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 shadow-sm">
      <Counter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import DropDown from "@/components/DropDown.vue";

export default defineComponent({
  components: {
    HelloWorld,
    Counter,
    DropDown,
  },
  setup() {},
});
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-opacity-75"
      >
        Options
        <ChevronDownIcon
          class="w-5 h-5 ml-2 -mr-1 text-indigo-200 hover:text-indigo-100"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="z-10 absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              @click="edit"
              :class="[
                active ? 'bg-indigo-500 text-white' : 'text-coolGray-900',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              <PencilIcon
                :active="active"
                class="w-5 h-5 mr-2 text-indigo-400"
                aria-hidden="true"
              />
              Edit
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              @click="duplicate"
              :class="[
                active ? 'bg-indigo-500 text-white' : 'text-coolGray-900',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              <DocumentDuplicateIcon
                :active="active"
                class="w-5 h-5 mr-2 text-indigo-400"
                aria-hidden="true"
              />
              Duplicate
            </button>
          </MenuItem>
        </div>
        <div className="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              @click="archive"
              :class="[
                active ? 'bg-indigo-500 text-white' : 'text-coolGray-900',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              <ArchiveBoxIcon
                :active="active"
                class="w-5 h-5 mr-2 text-indigo-400"
                aria-hidden="true"
              />
              Archive
            </button>
          </MenuItem>
          <MenuItem disabled v-slot="{ active }">
            <button
              @click="move"
              :class="[
                active ? 'bg-indigo-500 text-white' : 'text-coolGray-900',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                'disabled:opacity-50 disabled:cursor-not-allowed',
              ]"
            >
              <Bars3Icon
                :active="active"
                class="w-5 h-5 mr-2 text-indigo-400"
                aria-hidden="true"
              />
              Move
            </button>
          </MenuItem>
        </div>

        <div className="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              @click="remove"
              :class="[
                active ? 'bg-indigo-500 text-white' : 'text-coolGray-900',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
              ]"
            >
              <TrashIcon
                :active="active"
                class="w-5 h-5 mr-2 text-indigo-400"
                aria-hidden="true"
              />
              Delete
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  ChevronDownIcon,
  ArchiveBoxIcon,
  DocumentDuplicateIcon,
  TrashIcon,
  PencilIcon,
  Bars3Icon,
} from "@heroicons/vue/24/solid";

export default defineComponent({
  name: "DropDown",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    TrashIcon,
    DocumentDuplicateIcon,
    ArchiveBoxIcon,
    PencilIcon,
    Bars3Icon,
  },
  setup: () => {
    return {
      edit: () => alert("Edit this"),
      move: () => alert("Move this"),
      archive: () => alert("Archive this"),
      duplicate: () => alert("Duplicate this"),
      remove: () => alert("Delete this"),
    };
  },
});
</script>

<style scoped></style>

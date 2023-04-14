<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <span>{{ selectedOption.label }}</span>
      <svg :class="{'rotate-180': isOpen}" class="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 14l6-6H4l6 6z"/>
      </svg>
    </button>

    <transition enter-active-class="transition ease-out duration-100 transform" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75 transform" leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-if="isOpen" class="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg">
        <ul class="py-1">
          <li v-for="option in options" :key="option.key" @click="handleSelect(option)" class="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900">
            {{ option.label }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script setup>
const user = useUser()
const options = [
  { key: 1, label: "Option 1" },
  { key: 2, label: "Option 2" },
  { key: 3, label: "Option 3" },
  { key: 4, label: "Option 4" },
];

const isOpen = ref(false);
const selectedOption = ref(null);
watchEffect(() => {
  selectedOption.value = options[0];
});

function handleSelect(option) {
  selectedOption.value = option;
  isOpen.value = false;
}
console.log(user.value);
</script>
<style>
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
</style>
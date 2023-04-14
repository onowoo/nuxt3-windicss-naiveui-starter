<template>
  <div class="relative" v-if="!user">
    <button class="text-gray-700 pt-1 pl-2" @click="navigateTo('/login')">
      <span><n-icon size="20" :component="Person"></n-icon></span>
    </button>
  </div>

  <div class="relative" v-if="user">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md"
    >
      <span
        ><img :src="user.avatar" width="30" class="rounded-full" alt=""
      /></span>
      <svg
        :class="{ 'rotate-180': isOpen }"
        class="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 transform"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path fill-rule="evenodd" d="M10 14l6-6H4l6 6z" />
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute z-10 w-50 ml-4 mt-2 bg-white rounded-md shadow-lg"
      >
        <div class="flex items-center p-4 border-b bg-gray-50">
          <div>
            <img :src="user.avatar" width="50" class="rounded-full" alt="" />
          </div>
          <div class="ml-4 text-lg">{{ user.nickname }}</div>
        </div>
        <ul class="py-1">
          <li
            v-for="option in options"
            :key="option.key"
            class="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <div class="font-bold flex items-center gap-1">
              <n-icon size="15"><span v-html="option.icon"></span></n-icon>

              <div>{{ option.label }}:</div>
            </div>
            <div class="text-xs flex items-center">{{ option.value }}</div>
          </li>
        </ul>
        <div
          class="flex justify-evenly border-t text-xs bg-gray-50 rounded-b-md"
        >
          <button 
          class="py-3 cursor-pointer flex items-center"
          @click="navigateTo('user')"
          >
            <n-icon size="12" :component="SettingsOutline" class="mr-1"></n-icon
            >个人中心
          </button>
          <n-divider vertical class="h-auto py-4 m-0" />
          <button
            class="py-3 cursor-pointer flex items-center"
            @click="useLogout()"
          >
            <n-icon size="12" :component="LogOutOutline" class="mr-1"></n-icon
            >退出登录
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import {
  Person,
  SettingsOutline,
  LogOutOutline,
} from "@vicons/ionicons5";
const user = useUser();
const isOpen = ref(false);
const options = ref([]);
if (!user.value) {
  options.value = [];
} else {
  options.value = [
    {
      key: 1,
      label: "用户名",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path></svg>`,
      value: user.value.username,
    },
    {
      key: 2,
      label: "手机号",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><rect x="128" y="16" width="256" height="480" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></rect><path d="M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>`,
      value: user.value.mobile,
    },
    {
      key: 3,
      label: "积分",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M35.42 188.21l207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 176h416"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 64l-48 112l-96-128"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 64l48 112l96-128"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 448l-96-272"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 448l96-272"></path></svg>`,
      value: user.value.score,
    },
    {
      key: 4,
      label: "余额",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><rect x="48" y="144" width="416" height="288" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><path d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"></path></svg>`,
      value: user.value.money,
    },
    {
      key: 5,
      label: "等级",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>`,
      value: user.value.level,
    },
  ];
}

const selectedOption = ref(null);
watchEffect(() => {
  selectedOption.value = options[0];
});

function handleSelect(option) {
  selectedOption.value = option;
  isOpen.value = false;
}
</script>
<style>
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
.n-divider.n-divider--vertical {
  height: auto;
  margin: 0 0px;
}
</style>
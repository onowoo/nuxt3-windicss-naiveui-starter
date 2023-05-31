<template>
  <header class="shadow-md lg:shadow-none fixed z-50 w-[100%]">
    <!-- Main navigation container -->
    <nav
      class="flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-md shadow-black/5 lg:shadow-none lg:mx-auto lg:py-4"
      :class="[
        scrolled || navPush
          ? 'bg-white text-black'
          : 'bg-transparent text-white',
      ]"
      data-te-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between lg:w-[1200px] mx-auto px-3">
        <!-- Hamburger button for mobile view -->

        <!-- Right elements -->
        <div class="relative flex items-center gap-1">
          <!-- <button
            class="px-2 py-1 rounded-md text-black dark:text-white rounded-md hover:text-primary"
            @click="(e) => toggleDark()"
          >
          </button> -->
          <img
            v-if="scrolled || navPush"
            src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/logo4@2x.ecf5b92.png"
            class="w-16 lg:w-30"
            alt=""
          />
          <img
            v-else
            src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/gupiaoniu@2x.f3a34c1.png"
            class="w-16 lg:w-30"
            alt=""
          />
          <span class="text-xs lg:text-lg font-thin flex items-center">|</span>
          <span class="text-xs lg:text-lg font-thin">淘金者科技集团成员企业旗下产品</span>
        </div>

        <button
          class="block border-0 bg-transparent px-2 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="fasle"
          @click="navPush = !navPush"
          aria-label="Toggle navigation"
        >
          <!-- Hamburger icon -->
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <!-- Collapsible navigation container -->
        <div
          class="!visible hidden items-center lg:flex lg:justify-end lg:text-lg text-normal"
          :class="[isMobile ? 'basis-[100%]' : '', scrolled ? 'lg:text-black' : 'lg:text-white']"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <!-- Logo -->
          <NuxtLink
            class="mb-4 mr-2 mt-3 flex items-center  lg:mb-0 lg:mt-0"
            to="/"
          >
          </NuxtLink>
          <!-- Left navigation links -->
          <ul
            class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row lg:gap-4"
            data-te-navbar-nav-ref
          >
            <li
              class="mb-4 lg:mb-0 lg:pr-2 border-b pb-2 lg:border-none lg:pb-0"
              data-te-nav-item-ref
            >
              <NuxtLink class="font-thin" to="/" >首页</NuxtLink>
            </li>
            <li
              class="mb-4 lg:mb-0 lg:pr-2 border-b pb-2 lg:border-none lg:pb-0"
              data-te-nav-item-ref
            >
              <NuxtLink class="font-thin" to="/down" >下载体验</NuxtLink>
            </li>
            <li
              class="mb-4 lg:mb-0 lg:pr-2 border-b pb-2 lg:border-none lg:pb-0"
              data-te-nav-item-ref
            >
              <NuxtLink class="font-thin" to="/a" >A股资讯</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
const route = useRoute()
console.log(route);
const scrolled = ref(false);
const navPush = ref(false);
const isMobile = ref(null)
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 60;
  });
  isMobile.value =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );
});
</script>
<template>
  <header class="shadow-md fixed z-50 w-[100%]">
    <!-- Main navigation container -->
  <nav
    class="flex-no-wrap relative flex w-full items-center justify-between py-2 shadow-md shadow-black/5  dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
    :class="[scrolled || navPush ? 'bg-white text-black' : 'bg-transparent text-white']"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <!-- Hamburger button for mobile view -->


      <!-- Right elements -->
      <div class="relative flex items-center gap-1">
        <!-- <button
            class="px-2 py-1 rounded-md text-black dark:text-white rounded-md hover:text-primary"
            @click="(e) => toggleDark()"
          >
          </button> -->
        <img v-if="scrolled || navPush" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/logo4@2x.ecf5b92.png" class="w-16" alt="">
        <img v-else src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/gupiaoniu@2x.f3a34c1.png" class="w-16" alt="">
        <span class="text-xs font-thin flex items-center">|</span>
        <span class="text-xs font-thin">淘金者科技集团成员企业旗下产品</span>

      </div>

      <button
        class="block border-0 bg-transparent px-2 lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="fasle"
        @click="navPush = !navPush"
        aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7">
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </button>

      <!-- Collapsible navigation container -->
      <div
        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent1"
        data-te-collapse-item>
        <!-- Logo -->
        <a
          class="mb-4 mr-2 mt-3 flex items-center focus:text-neutral-900 lg:mb-0 lg:mt-0"
          href="#">
        </a>
        <!-- Left navigation links -->
        <ul
          class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
          data-te-navbar-nav-ref>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <!-- Dashboard link -->
            <a
              class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              href="#"
              data-te-nav-link-ref
              >Dashboard</a
            >
          </li>
          <!-- Team link -->
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              data-te-nav-link-ref
              >Team</a
            >
          </li>
          <!-- Projects link -->
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <a
              class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              data-te-nav-link-ref
              >Projects</a
            >
          </li>
        </ul>
      </div>

    </div>
  </nav>
  </header>
</template>
<script setup>
const scrolled = ref(false);
const navPush = ref(false)
console.log(navPush.value);
console.log(scrolled.value);
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 60
  })
})

</script>
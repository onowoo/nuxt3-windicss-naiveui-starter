<template>
  <header class="h-15 shadow-md backdrop-filter backdrop-blur-sm bg-[#ecf0f3]/99 fixed z-50 w-[100%]">
    <div class="max-w-300 h-[100%] mx-auto flex justify-between items-center">
      <div class="flex flex-row items-center"><img :src="logoImg" class="h-10 pr-2" alt="logo" />{{ siteName }}</div>
      <UiMenu />
    </div>
  </header>
</template>
<script setup>
const { data:config } = await getConfig()

const logoImg = config.value.sitelogo
const siteName = config.value.sitename

</script>
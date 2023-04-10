<template>
  <header class="h-15 shadow-md backdrop-filter backdrop-blur-sm bg-light-500/50 fixed z-50 w-[100%]">
    <div class="max-w-300 h-[100%] mx-auto flex justify-between items-center">
      <div class="flex flex-row items-center"><img :src="logoImg" class="h-10 pr-2" alt="logo" />{{ siteName }}</div>
      <UiMenu />
    </div>
  </header>
</template>
<script setup>
const { data } = await getConfig()

const logoImg = data.value.sitelogo
const siteName = data.value.sitename

</script>

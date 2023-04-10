
<template>
      <div class="flex items-center gap-2">
        <nuxt-link to="/"><div class="mr-8">home</div></nuxt-link>
        <nuxt-link to="/test"><div class="mr-8">test</div></nuxt-link>
        <div v-for="i in 6" :key="i" class="mr-8">menu</div>
        <UiSearch />
        <UiTheme />
        <UiTelegram />
      </div>
</template>

<style>
.container {
  max-width: 1200px;
}
</style>
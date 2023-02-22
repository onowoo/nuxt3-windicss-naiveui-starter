<template>
<div class="flex flex-col justify-between min-h-screen min-w-screen">
  <header class="h-15 shadow-md">
    <div class="max-w-300 h-[100%] mx-auto flex justify-between items-center">
      <div>logo</div>
      <div class="flex items-center gap-8">
        <div v-for="i in 6" :key="i">menu</div>
        <UiTheme />
      </div>

    </div>
  </header>
  <main class="flex-auto"><slot /></main>
  <footer class="h-15 border-t flex justify-center items-center">footer</footer>
</div>
</template>

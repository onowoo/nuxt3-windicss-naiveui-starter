<template>
<div class="flex flex-col justify-between min-h-screen">
  <Header />
  <main class="flex-auto">
    <slot/>
  </main>
  <Footer />
</div>
</template>

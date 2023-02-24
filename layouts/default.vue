
import { UiMenu } from '~~/.nuxt/components';

<template>
<div class="flex flex-col justify-between min-h-screen min-w-screen">
  <Header />
  <main class="flex-auto"><slot /></main>
  <Footer />
</div>
</template>

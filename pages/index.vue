<template>
  <Swiper />
  <SwiperPc />
  <Banner />
  <Why />
  <Quotes />
  <Product />
  <Ai />
  <News />
  <Partner />
</template>
<script setup>
useHead({
  title: '页面标题',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '这是页面描述'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: '关键词1, 关键词2, 关键词3'
    },
  ],
})
</script>
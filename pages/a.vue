<template>
    <div class="bgA min-h-62 z-10 flex justify-center items-center text-[30px] text-white">
        <div class="lg:text-[60px] lg:py-56">随时随地  ，了解A股</div>
    </div>
    <List />
</template>
<style scoped>
.bgA {
    background-image: url('/img/abg.png');
    background-size: 100% 100%;
}
</style>
<script setup>
useHead({
  title: 'a页面标题',
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
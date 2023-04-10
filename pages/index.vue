<template>
  <UiSwiper />
  <div class="max-w-[1200px] mx-auto">
    <UiGird />
  </div>
  <UiPagination />
</template>
<script setup>
const { data:post } = await getArchives()

const bannerPosts = JSON.parse(JSON.stringify(post.value.pageList.data))

console.log(JSON.parse(JSON.stringify(post.value.pageList.data)));
</script>
<template>
  <UiSwiper :bannerList="posts"/>
  <div class="max-w-[1200px] mx-auto">
    <UiIndexBanner :archives="posts"/>
  </div>
  <div class="max-w-[1200px] mx-auto">
    <UiGird :archives="posts"/>
  </div>
  <UiPagination />
</template>
<script setup>
const { data:post } = await getArchives()

const posts = JSON.parse(JSON.stringify(post.value.pageList.data))

// console.log(posts);
</script>
<template>
  <div class="text-lg flex items-center justify-between border-l-5 border-l-blue-400 pl-2 font-bold">
    <div>最新发布</div>
    <div class="text-gray-500 text-xs font-thin">More...</div>
  </div>
  <n-grid :x-gap="20" :y-gap="20" :cols="4" class="my-6">
    <n-grid-item v-for="(item,index) in posts.archives" :key="index" class="hover:shadow-md">
      <n-card :title="item.title">
          <template #cover>
          <img draggable="false" src="https://dummyimage.com/800x420" class="h-40">
          </template>
          <UiMeta />
      </n-card>
    </n-grid-item>
  </n-grid>
</template>
<script setup>
 const posts = defineProps({
  archives: Array
})
// console.log(posts.archives)
</script>
  <style>
  .n-card > .n-card-header .n-card-header__main{
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .n-card .n-card-cover img{
    @apply transform scale-100 ease-in-out duration-700 delay-300
  }
  .n-card .n-card-cover img:hover {
    @apply transform scale-125 ease-in-out duration-700 delay-300
  }
  </style>
<template>
    <n-grid :x-gap="20" :y-gap="20" :cols="3" class="my-6">
      <n-grid-item class="hover:shadow-md">
        <n-card title="标题">
            <template #cover>
            <img draggable="false" src="https://www.creative-tim.com/learning-lab/assets/tailwind-soft-ui-dashboard/img/home-decor-1.jpg">
            </template>
            <UiMeta />
        </n-card>
      </n-grid-item>
      <n-grid-item v-for="i in 16" :key="i" class="hover:shadow-md">
        <n-card :title="title">
            <template #cover>
            <img draggable="false" src="https://www.creative-tim.com/learning-lab/assets/tailwind-soft-ui-dashboard/img/home-decor-1.jpg">
            </template>
            <UiMeta />
        </n-card>
      </n-grid-item>
    </n-grid>
  </template>
<script setup>
 const title = 'Firefox浏览器尚未支持尚未支持'
</script>
  <style>
  .n-card .n-card-cover img{
    @apply transform scale-100 ease-in-out duration-700 delay-300
  }
  .n-card .n-card-cover img:hover {
    @apply transform scale-125 ease-in-out duration-700 delay-300
  }
  </style>
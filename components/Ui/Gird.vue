<template>
    <n-grid :x-gap="20" :y-gap="20" :cols="3" class="my-6">
      <n-grid-item v-for="i in 16" :key="i" class="hover:shadow-sm">
        <n-card title="标题">
            <template #cover>
            <img src="https://down.hackzt.cn/202302/a875df8989.png">
            </template>
            meta
        </n-card>
      </n-grid-item>
    </n-grid>
  </template>
  
  <style scoped>
  .light-green {
    height: 280px;
    background-color: rgba(0, 128, 0, 0.12);
  }
  .green {
    height: 280px;
    background-color: rgba(0, 128, 0, 0.24);
  }
  </style>
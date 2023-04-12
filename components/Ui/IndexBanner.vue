<template>
  <n-grid :x-gap="20" :y-gap="20" :cols="4" class="my-6">
    <n-grid-item v-for="(item,index) in 4" :key="index" class="hover:shadow-md">
      <n-card
      content-style="height:100%;margin:auto 0;padding:0 0"
      >
          <template #cover>
          <img draggable="false" src="https://dummyimage.com/800x320" class="max-h-28">
          </template>
          <div class="flex items-center h-16 pl-8">
            <div>
              <n-icon size="40" color="#000">
                <LogoApple />
              </n-icon>
            </div>
            <div class="flex flex-col pl-4">
              <div class="font-bold text-normal">导航标题</div>
              <div class="font-thin text-xs">这里是导航描述内容</div>
            </div>
          </div>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>
<script setup>
import { LogoApple } from '@vicons/ionicons5'
 const posts = defineProps({
  archives: Array
})
const filteredBannerList = computed(() => {
      return posts.archives.filter(item => item.flag === 'top');
    });
// console.log(filteredBannerList.value)
</script>
  <style>
  </style>
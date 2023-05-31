<template>
  <div class="lg:bg-white lg:shadow-sm">
    <div class="grid grid-cols-3 lg:grid-cols-6 lg:max-w-[1200px] lg:mx-auto gap-4 py-6">
      <div v-for="(item, index) in items" :key="index" class="flex flex-col items-center">
        <img :src="item.icon" alt="icon" class="w-15 h-15">
        <span class="mt-2 flex flex-col gap-1 text-[14px] lg:text-[18px] font-light" v-html="item.title"></span>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  const items = [
    {
      title: `<span>一个账户</span><span>投资全球</span>`,
      icon: 'img/icon1.png'
    },
    {
      title: '<span>实时行情</span><span>极速体验</span>',
      icon: 'img/icon2.png'
    },
    {
      title: '<span>日内产品</span><span>玩转收益</span>',
      icon: 'img/icon3.png'
    },
    {
      title: '<span>港股美股</span><span>一键打新</span>',
      icon: 'img/icon4.png'
    },
    {
      title: '<span>量化选股</span><span>理性投资</span>',
      icon: 'img/icon5.png'
    },
    {
      title: '<span>跟单社区</span><span>紧跟热股</span>',
      icon: 'img/icon6.png'
    }
  ]
  </script>
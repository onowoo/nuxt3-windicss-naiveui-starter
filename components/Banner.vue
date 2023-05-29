<template>
    <div class="grid grid-cols-3 gap-4 mt-6">
      <div v-for="(item, index) in items" :key="index" class="flex flex-col items-center">
        <img :src="item.icon" alt="icon" class="w-7 h-7">
        <span class="mt-2 flex flex-col gap-1 text-[14px] font-light" v-html="item.title"></span>
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
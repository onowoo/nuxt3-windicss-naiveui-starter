<template>
    <div class="lg:max-w-[1200px] lg:mx-auto">
        <div class="text-2xl lg:text-[50px] mt-12 lg:mt-24 text-center">为什么投资美股、港股</div>
        <div class="flex justify-center mt-6">
            <div class="w-10 lg:w-20 border-t border-2"></div>
            <div class="w-8 lg:w-16 border-t border-2 border-blue-500"></div>
            <div class="w-10 lg:w-20 border-t border-2"></div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-6">
            <div v-for="(item, index) in items" :key="index" class="flex flex-col items-center bg-light-50 shadow-sm py-4 lg:py-12 rounded-md">
                <img :src="item.icon" alt="icon" class="w-25 h-25">
                <span class="mt-4 text-[16px] lg:text-[24px] font-normal" v-html="item.title"></span>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const items = [
  {
    title: `投资优质企业`,
    icon: 'img/icon7.png'
  },
  {
    title: '交易品种丰富',
    icon: 'img/icon8.png'
  },
  {
    title: '可融资可沽空',
    icon: 'img/icon9.png'
  },
  {
    title: 'T+0交易灵活',
    icon: 'img/icon10.png'
  },
  {
    title: '超低投资门槛',
    icon: 'img/icon11.png'
  },
  {
    title: '市场透明规范',
    icon: 'img/icon12.png'
  }
]
</script>
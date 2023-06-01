<template>
    <div class="bgA min-h-62 z-10 flex justify-center items-center text-[30px] text-white">
        <div class="lg:text-[60px] lg:py-56">立即下载  ，大华中创</div>
    </div>
    <div class="lg:max-w-[1200px] lg:mx-auto">
        <div class="border-b py-4 flex flex-col gap-3 mx-6 lg:gap-6 lg:py-12 lg:text-center">
            <div class="text-[#212832] text-[18px] lg:text-[28px] font-bold">英特尔(INTC)料第二财季收入可望达到预期区间的接近上限</div>
            <div class="lg:text-[18px] lg:text-[#919cad]">2023-06-01 10:09</div>
        </div>
        <div v-html="content" class="mx-6 py-4 lg:py-12 lg:leading-10 lg:text-[18px] lg:text-[#919cad]"></div>
    </div>
</template>
<script setup>
useHead({
  title: '详情页面标题',
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
const content = `<p>英特尔(INTC)表示，第二财季收入可望达到预期区间的接近上限。英特尔财务总监津斯纳(David Zinsner)出席投资研讨会时称，用于游戏及人工智能(AI)的晶片需求强劲，第二财季收入可望介乎120-125亿美元。该公司4月曾估计，第二财季收入介乎115-125亿美元。<br><br>津斯纳指出，AI 热潮对公司有利，其晶圆厂可以向客户提供生产 AI 晶片所须的薄片。</p>`
</script>
<style scoped>
.bgA {
    background-image: url('/img/abg.png')
}
</style>
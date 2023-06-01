<template>
    <div v-for="item in 8" :key="item" class="flex justify-center mx-6 lg:mx-auto gap-3 lg:py-6 lg:gap-12 lg:max-w-[1200px] py-4 border-b">
        <div class="basis-2/5 rounded-md flex justify-start items-center">
            <img class="rounded-md" src="https://img1.huanyingzq.com/news/043e9d6f97a54979be4c1c54bd0069dc.JPG" alt="">
        </div>
        <div class="basis-3/5 flex flex-col justify-between lg:py-1">
            <div>
                <div class="text-[16px] lg:text-[24px]  tracking-widest">{{ truncate(title,25) }}</div>
                <div class="hidden lg:flex lg:text-[#919cad] lg:text-[16px] pt-6">当地时间5月31日晚间，美国国会众议院投票轻松通过了一项关于联邦政府债务上限和预算的法案。投票总数为 314 票赞成，117 票反对。共和党人以 149 票对 71 票赞成该法案</div>
            </div>
            <div class="text-[#919cad] text-[12px] lg:text-[16px] lg:flex lg:justify-end font-thin">2023-06-01 10:10</div>
        </div>
    </div>
</template>
<script setup>
const title = `高级管理人员被约谈、涉及重大诉讼 宁科生物短期利空叠加`
const truncate = (str, length) => {
  if (str.length > length) {
    return str.slice(0, length) + '...'
  } else {
    return str
  }
}
</script>
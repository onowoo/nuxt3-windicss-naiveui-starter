<template>
  <div class="bgNews w-[100%] flex flex-col gap-6 pb-6">
      <div class="text-2xl pt-8 pt-4 text-center text-light-50">行业动态</div>
      <div class="flex justify-center">
          <div class="w-10 border-t border-2"></div>
          <div class="w-8 border-t border-2 border-blue-500"></div>
          <div class="w-10 border-t border-2"></div>
      </div>
      <div 
      class="text-white flex items-center mx-6 py-6 gap-4 h-20 border rounded-md text-xs"
      v-for="item in items" :key="item"
      >
          <img class="h-20" :src="item.icon" alt="">
          <div v-html="item.title"></div>
      </div>
  </div>
</template>
<style scoped>
.bgNews {
  background-image: url(/img/server.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
<script setup>
const items = [
  {
    title: `联想控股成员企业，目前，君联资本资金规模合计逾130亿元人民币，重点投资于运作主体在中国及市场与中国相关的创新、成长型企业。`,
    icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/junlianziben@2x.0a0c421.png'
  },
  {
    title: '红杉资本于1972年在美国硅谷成立。红杉资本中国基金是2005年9月由沈南鹏与红杉资本共同创办。自2005年9月创立以来，红杉资本中国基金投资了500余家企业。',
    icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hongshanziben@2x.e8bbeb6.png'
  },
  {
    title: '华兴资本于2004年在北京成立，是专注于为快速成长的中国创业型企业家提供财务顾问服务的投资银行。',
    icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/huaxingziben@2x.51c3793.png'
  },
  {
    title: '险峰长青为险峰（K2VC）旗下团队，创立于2010年，专注天使和Pre-A轮投资，关注推动科技进步、商业模式革新及人们生活方式的改变。',
    icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/xianfengchangqing@2x.deb7506.png'
  },
]
</script>
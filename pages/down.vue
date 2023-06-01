<template>
    <div class="bgDown min-h-62 z-10 flex justify-center items-center text-[30px] text-white">
        <div class="lg:text-[60px] lg:py-56">立即下载  ，大华中创</div>
    </div>
    <div class="flex flex-col flex-col-reverse lg:flex-row justify-between lg:px-16 lg:max-w-[1200px] lg:mx-auto py-8">
        <div class="w-full lg:mb-26 flex justify-center lg:w-120">
            <div class="flex justify-center items-center pt-8 lg:pt-24">
                <div class="bgPhone w-32 lg:w-70 p-1">
                    <video 
                    loop 
                    preload="" 
                    muted 
                    autoplay 
                    playsinline="true" 
                    webkit-playsinline="true" 
                    x5-playsinline="true" 
                    x-webkit-airplay="true" 
                    x5-video-player-type="h5" 
                    class="rounded-2xl lg:rounded-4xl p-1 hidden lg:block z-0">
                    <source src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/videos/andriod_light.acea484.mp4" type="video/mp4">
                    </video>
                    <img class="rounded-2xl lg:hidden" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/android2_mobile@2x.d137d9a.png" alt="">
                </div>
                <div class="bgPhone w-35 lg:w-80 p-1">
                    <video 
                    loop 
                    preload="" 
                    muted 
                    autoplay 
                    playsinline="true" 
                    webkit-playsinline="true" 
                    x5-playsinline="true" 
                    x-webkit-airplay="true" 
                    x5-video-player-type="h5" 
                    class="rounded-2xl lg:rounded-5xl p-1 hidden lg:block">
                    <source src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/videos/ios_light.2fd21da.mp4" type="video/mp4">
                    </video>
                    <img class="rounded-2xl lg:hidden" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/android2_mobile@2x.d137d9a.png" alt="">
                </div>
            </div>            
        </div>
        <div class="flex flex-col justify-center items-center">
            <div class="lg:text-[28px] text-[20px]  border-b py-4">盈路证券官方推荐港美股交易软件</div>
            <div class="flex lg:text-[20px] text-[14px] my-4 gap-5">
                <div class="flex gap-3">
                    <img class="w-3 h-3 lg:w-6 lg:h-6" src="/img/trueicon.png" alt="">
                    <div>三分钟开户</div>
                </div>
                <div class="flex gap-3">
                    <img class="w-3 h-3 lg:w-6 lg:h-6" src="/img/trueicon.png" alt="">
                    <div>AI量化选股</div>
                </div>
                <div class="flex gap-3">
                    <img class="w-3 h-3 lg:w-6 lg:h-6" src="/img/trueicon.png" alt="">
                    <div>交易专线</div>
                </div>
            </div>
            <div class="flex justify-between w-full">
                <img width="166" height="166" class="hidden lg:flex" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/gpn_android_d.42ae823.png" alt="">
                <div class="flex lg:flex-col justify-between gap-4 lg:gap-2 w-full px-6">
                    <div class="flex items-center border rounded-md lg:px-4 px-2 lg:py-3 py-1 gap-3 w-">
                        <img class="lg:w-10 lg:h-10 w-6 h-6" src="/img/apple.png" alt="">
                        <div class="flex flex-col items-center">
                            <div class="lg:text-[20px] text-[10px]">Download on the</div>
                            <div class="lg:text-[24px] text-[12px] font-bold mt-2">App Store</div>
                        </div>
                    </div>
                    <div class="flex items-center border rounded-md px-4 py-3 gap-3">
                        <img class="lg:w-10 lg:h-10 w-6 h-6" src="/img/apk.png" alt="">
                        <div class="flex items-center justify-center w-full px-6 lg:px-3">
                            <div class="lg:text-[24px] text-[12px] font-bold">Android</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bgDown {
    background-image: url('/img/bgDown.png')
}
.bgPhone {
    background-image: url('/img/bgphone.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
<script setup>
useHead({
  title: '下载页面标题',
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
</script>
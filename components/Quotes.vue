<template>
    <div class="bgQuotes">
        <div class="text-2xl lg:text-[50px] mt-12 lg:mt-24 lg:pt-24 pt-4 text-center text-light-50">专业行情，让波动无处遁形</div>
        <div class="flex justify-center mt-4">
            <div class="w-10 lg:w-20 border-t border-2"></div>
            <div class="w-8 lg:w-16 border-t border-2 border-blue-500"></div>
            <div class="w-10 lg:w-20 border-t border-2"></div>
        </div>
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
                <img src="/img/pop1.png" class="w-35 lg:w-60 -ml-6 lg:-ml-40 absolute -mt-20 lg:-mt-100" alt="">
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
                <img src="/img/pop3.png" class="w-35 lg:w-60 ml-1 lg:ml-70 absolute -mt-80 lg:-mt-160" alt="">
                <img src="/img/pop2.png" class="w-35 lg:w-60 ml-10 lg:ml-70 absolute -mt-30 lg:-mt-60" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.bgQuotes {
    background-image: url(/img/bgquotes.png);
    background-repeat: no-repeat;
    background-size: 100% 80%;
}
.bgPhone {
    background-image: url(/img/bgphone.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
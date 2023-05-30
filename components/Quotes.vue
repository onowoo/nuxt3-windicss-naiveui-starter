<template>
    <div class="bgQuotes">
        <div class="text-2xl mt-12 pt-4 text-center text-light-50">专业行情，让波动无处遁形</div>
        <div class="flex justify-center mt-4">
            <div class="w-10 border-t border-2"></div>
            <div class="w-8 border-t border-2 border-blue-500"></div>
            <div class="w-10 border-t border-2"></div>
        </div>
        <div class="flex justify-center items-center pt-8">
            <div class="bgPhone w-32 p-1">
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
                class="rounded-2xl hidden lg:block">
                <source src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/videos/andriod_light.acea484.mp4" type="video/mp4">
                </video>
                <img class="rounded-2xl lg:hidden" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/android2_mobile@2x.d137d9a.png" alt="">
                <img src="/img/pop1.png" class="w-35 -ml-6 absolute -mt-50" alt="">
            </div>
            <div class="bgPhone w-35 p-1">
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
                class="rounded-2xl hidden lg:block">
                <source src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/videos/ios_light.2fd21da.mp4" type="video/mp4">
                </video>
                <img class="rounded-2xl lg:hidden" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/android2_mobile@2x.d137d9a.png" alt="">
                <img src="/img/pop3.png" class="w-35 ml-1 absolute -mt-80" alt="">
                <img src="/img/pop2.png" class="w-35 ml-10 absolute -mt-30" alt="">
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
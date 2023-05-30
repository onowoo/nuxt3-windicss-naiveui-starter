<template>
    <div class="bgNews w-[100%] flex flex-col gap-6 pb-6">
        <div class="text-2xl pt-8 pt-4 text-center text-dark-500">合作伙伴</div>
        <div class="flex justify-center">
            <div class="w-10 border-t border-2"></div>
            <div class="w-8 border-t border-2 border-blue-500"></div>
            <div class="w-10 border-t border-2"></div>
        </div>
        <div class="grid grid-cols-3 gap-3 mt-6 mx-8">
            <div v-for="(item, index) in items" :key="index" class="flex flex-col items-center">
                <img :src="item.icon" alt="icon" class="w-22">
                <span class="mt-2 flex flex-col gap-1 text-[14px] font-light" v-html="item.title"></span>
            </div>
        </div>
    </div>
  </template>
    <script setup>
    const items = [
        {
        title: ``,
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo1@2x.36c0075.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo2@2x.2bf3b69.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo3@2x.208283a.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo4@2x.2267c94.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo5@2x.29978a3.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo6@2x.43bc7f6.png'
        },
        {
        title: ``,
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo7@2x.aba9372.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo8@2x.1009dec.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo9@2x.51c19d0.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo10@2x.5178aec.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo11@2x.9eccd8f.png'
        },
        {
        title: '',
        icon: 'https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/hezuo12@2x.5de85a9.png'
        }
    ]
    </script>
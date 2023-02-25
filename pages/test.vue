<template>
    <div class="flex flex-col justify-center items-center min-h-screen max-w-[980px] mx-auto">
        <div class="text-3xl mb-8">api测试</div>
        <div>{{config}}</div>
    </div>
</template>
<script setup>
const {data: config, pending, refresh, error} = await useHttpGet("IndexData", "/cms/site", {
  lazy: true,
  initialCache: false,
})
console.log(config.value);
</script>

    
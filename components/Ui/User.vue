<template>
    <div>
     
        <NButton circle size="small" v-if="!token" @click="navigateTo('/login')">
            <NIcon :size="18" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6z" fill="currentColor"></path><path d="M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480z" fill="currentColor"></path></svg>
            </NIcon>
        </NButton>
        <NButton circle size="small" v-if="token">
            <NIcon :size="18" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM184 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24zm-23.67 149.83c12-40.3 50.2-69.83 95.62-69.83s83.62 29.53 95.71 69.83a8 8 0 0 1-7.82 10.17H168.15a8 8 0 0 1-7.82-10.17zM328 256a24 24 0 1 1 24-24a23.94 23.94 0 0 1-24 24z" fill="currentColor"></path></svg>
            </NIcon>
        </NButton>

    </div>
</template>
<script setup>
const token = useCookie("token")
console.log(token);
</script>
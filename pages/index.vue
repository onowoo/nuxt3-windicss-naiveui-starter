<template>
  <UiSwiper :bannerList="swiperImg"/>
  <div class="max-w-[1200px] mx-auto">
    <UiGird />
  </div>
  <UiPagination />
</template>
<script setup>
const { data } = await getConfig()
const swiperImg = data.value.bannerList.map((obj) => {
    return { ...obj }; 
})
// console.log(swiperImg);
</script>
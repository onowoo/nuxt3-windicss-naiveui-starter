<template>
    <n-carousel
      effect="fade"
      autoplay
      class="shadow-md h-140 mx-auto container mt-20"
    >
      <n-carousel-item class="carousel-img" v-for="(item,index) in imgList.bannerList" :key="index">
        <img
          class="carousel-img"
          :src="item.image"
        >
      </n-carousel-item>

        <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
            <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
            />
        </ul>
        </template>
    </n-carousel>
  </template>
<script setup>
const imgList = defineProps({
  bannerList: Array
})
</script>
  
  <style scoped>
  .carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

.custom-dots {
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
  </style>
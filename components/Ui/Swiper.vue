<template>
    <n-carousel
      effect="fade"
      autoplay
      class="shadow-md h-100"
    >
      <n-carousel-item class="carousel-img">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
      </n-carousel-item>
      <n-carousel-item class="carousel-img">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
      </n-carousel-item>
      <n-carousel-item class="carousel-img">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
      </n-carousel-item>
      <n-carousel-item class="carousel-img">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
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
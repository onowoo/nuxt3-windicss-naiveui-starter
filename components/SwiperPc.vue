<template>
  <n-carousel show-arrow autoplay :class="[isMobile ? 'hidden' : '']">
    <div class="slide1">
      <div class="carousel-img-wrapper">
        <img
          class="carousel-img"
          src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/banner2_bg.008b64f.png"
        >
        <div class="slide-content flex justify-center items-end">
          <div class="flex flex-col lg:flex-row lg:items-center">
            <img class="w-60 lg:w-260 h-40 lg:h-180" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/ziyuan@2x.5638238.png" />
            <div>
              <img class="w-50 lg:w-102" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/biaoti@2x.76b3fde.png"/>
              <button class="bg-[#ffffff] mt-4 rounded-md w-[160px] mx-auto py-2 px-3 text-[#4c8bff]">立即下载</button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    <div class="slide2">
      <div class="carousel-img-wrapper">
        <img
          class="carousel-img"
          src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/banner@2x.5697e4e.png"
        >
        <div class="slide-content flex justify-center items-end">
          <div class="flex flex-col  lg:flex-row lg:items-center">
            <img class="w-60 lg:w-240 lg:h-160" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/banner_2_phone_mobile.9d726ce.png" />
            <div>
              <img class="w-50 lg:w-102" src="https://gmgstatics.oss-cn-hangzhou.aliyuncs.com/p/gpn-ssr-official/img/biaoti@2x.76b3fde.png"/>
              <button class="bg-[#ffffff] mt-4  rounded-md w-[160px] mx-auto  py-2 px-3 text-[#4c8bff]">立即下载</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #arrow="{ prev, next }">
      <div class="custom-arrow">
        <button type="button" class="custom-arrow--left" @click="prev">
          <n-icon><ArrowBack /></n-icon>
        </button>
        <button type="button" class="custom-arrow--right" @click="next">
          <n-icon><ArrowForward /></n-icon>
        </button>
      </div>
    </template>
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

<script>
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ArrowBack,
    ArrowForward
  }
});
</script>
<script setup>
const isMobile = ref(null)
onMounted(() => {
  isMobile.value =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );
});
</script>

<style scoped>
.carousel-img-wrapper {
  position: relative;
}

.carousel-img {
  position: relative; /* 设置为相对定位 */
  z-index: 1; /* 添加更高的 z-index */
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); /* 居中元素 */
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.carousel-img {
  width: 100%;
  min-height: 405px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
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
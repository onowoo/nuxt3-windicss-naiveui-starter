<script setup>
import { NCard } from 'naive-ui'
</script>

<template>
  <main class="py-20 px-10 text-center">
    <div class="h-40 w-40 dark:bg-dark-500 dark:text-light text-dark-50">
      这里是测试数据
    </div>
    <div class="mt-5 mx-auto text-center dark:bg-dark-600 text-light-100 text-sm">
      <UiTheme />
      <NCard
        title="卡片分段示例"
        :segmented="{
          content: true,
          footer: 'soft',
        }"
      >
        <template #header-extra>
          #header-extra
        </template>
        卡片内容
        <template #footer>
          #footer
        </template>
        <template #action>
          #action
        </template>
      </NCard>
    </div>
  </main>
</template>

<template>
  <main class="py-20 px-10 text-center">
    <div class="h-40 w-40 dark:bg-dark-500 dark:text-light text-dark-50">
      这里是测试数据
    </div>
    <div class="mt-5 mx-auto text-center dark:bg-dark-600 text-light-100 text-sm">
      <UiTheme />
      <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">
      Tertiary
    </n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>
    <n-button type="success">
      Success
    </n-button>
    <n-button type="warning">
      Warning
    </n-button>
    <n-button type="error">
      Error
    </n-button>
  </n-space>
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

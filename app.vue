<script setup>
import { NConfigProvider, darkTheme, useOsTheme } from 'naive-ui'
import { AppSetup } from './utils/app'
AppSetup()
const theme = useState('theme.current')
const osThemeRef = useOsTheme()
const naiveTheme = ref(null)
onMounted(() => {
  if (theme.value === 'dark')
    naiveTheme.value = darkTheme
  else
    naiveTheme.value = null
})
watch(
  () => theme.value,
  (v) => {
    if (v === 'dark')
      naiveTheme.value = darkTheme
    else
      naiveTheme.value = null
  },
)
</script>

<template>
  <Html :class="theme">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 dark:bg-dark-300"
    >
      <NConfigProvider inline-theme-disabled :theme="naiveTheme">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </NConfigProvider>
    </Body>
  </Html>
</template>

<style>
</style>

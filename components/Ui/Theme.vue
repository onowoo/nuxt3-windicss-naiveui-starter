<script setup>
import { NButton, NDropdown, NIcon } from 'naive-ui'
import { CloudyNightOutline, SunnyOutline } from '@vicons/ionicons5'
import { availableThemes } from '~/utils/theme'

const options = []
for (let i = 0; i < availableThemes.length; i++)
  options.push(availableThemes[i])

const showDropdownRef = ref(false)
const themeSetting = useState('theme.setting')
const theme = useState('theme.current')
const handleSelect = (key) => { themeSetting.value = key }
</script>

<template>
  <div>
    <NDropdown trigger="hover" :options="options" class="text-dark-50" @select="handleSelect">
      <NButton circle size="small">
        <NIcon :size="18" class="flex dark:hidden">
          <SunnyOutline />
        </NIcon>
        <NIcon :size="18" class="hidden dark:flex">
          <CloudyNightOutline />
        </NIcon>
      </NButton>
    </NDropdown>
  </div>
</template>

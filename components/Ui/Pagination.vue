<template>
    <n-pagination v-model:page="page" :page-count="100" class="flex mb-6 justify-center"/>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    setup () {
      return {
        page: ref(2)
      }
    }
  })
  </script>
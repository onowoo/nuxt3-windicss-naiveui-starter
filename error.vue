<script setup>
const props = defineProps({
    error: Object
})
const handleError = () => clearError({ redirect:'/' })
</script>
<template>
    {{ error.message }}
    <n-button @click="handleError">clear errors</n-button>
</template>
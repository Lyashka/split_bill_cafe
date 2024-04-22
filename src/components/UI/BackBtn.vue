<template>
  <v-btn icon="$first" variant="plain" @click="openPrevPage">
</v-btn>
</template>

<script setup> 
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  url: String
})

const router = useRouter()
function openPrevPage() {
    router.push(`${props.url}`)
}
</script>

<style>

</style>
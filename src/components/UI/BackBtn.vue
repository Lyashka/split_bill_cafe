<template>
  <v-btn
    icon="mdi-undo"
    
    variant="plain"
    @click="openPrevPage"
  />
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  url: String
})

const router = useRouter()
function openPrevPage() {
  router.push(`${props.url}`)
}
</script>

<template>
  <div class=" flex flex-row items-center justify-center w-full gap-2 group">
    <div class="whitespace-nowrap transform transition group-hover:(font-bold scale-120)">
      {{ item.name }}
    </div>
    <div class="h-1px w-full flex-1 bg-white">
    </div>
    <div v-if="isNaN(item.price)" class="whitespace-nowrap transform transition group-hover:(font-bold scale-120)">
      {{ item.price }}
    </div>
    <div v-else class="transform transition group-hover:(font-bold scale-120)">
      €{{ (item.price / 100).toFixed(2) }}
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
onMounted(() => {
})
</script>
<style lang="scss" scoped>

</style>

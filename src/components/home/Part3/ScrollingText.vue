<template>
  <div class="scrolling-text-trigger" style="height: 2700px">
    <div class="text-primary whitespace-nowrap overflow-y-hidden transform translate-x-[65%] scrolling-text font-bold" style="font-size: 500px;">
      Precious moments
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

const setupScrollingText = () => {
  const scrollingTextTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.scrolling-text',
      start: 'center center',
      end: '+=2000',
      pin: '.scrolling-text',
      scrub: true,
    },
  })

  scrollingTextTimeline.to('.scrolling-text', { x: '-70%' })
}

onMounted(() => {
  setupScrollingText()
})
</script>
<style lang="scss" scoped>

</style>

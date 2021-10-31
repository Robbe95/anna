<script setup>
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRoute } from 'vue-router'

gsap.registerPlugin(ScrollToPlugin)

const route = useRoute()
const prices = route.params.prices
onMounted(() => {
  if (route.query.scrollTo) {
    const element = document.querySelector(`#${route.query.scrollTo}`)
    const x = (window.innerWidth - element.offsetWidth) / 2
    const y = (window.innerHeight - element.offsetHeight) / 2
    gsap.to(window, { duration: 4, scrollTo: { y: `#${route.query.scrollTo}`, offsetY: (window.innerHeight - element.offsetHeight) / 2 } })
  }
})

</script>

<template>
  <div class="relative bg-background overflow-hidden">
    <StartAnimation />
    <HomePart2 />
    <HomePart3 />
    <HomePart4 />
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
name: home
meta:
  layout: home
</route>

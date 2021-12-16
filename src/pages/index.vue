<script setup>
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRoute } from 'vue-router'
import { useGallery } from '@/stores/gallery'

const galleryStore = useGallery()
gsap.registerPlugin(ScrollToPlugin)

const loading = computed(() => galleryStore.homepageLoading)
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
  <div>
    <div
      class="relative bg-background overflow-hidden"
      :class="{'opacity-0' : loading}"
    >
      <StartAnimation />
      <HomePart2 />
      <HomePart3 />
      <HomePart4 />
    </div>
    <div v-if="loading" class="h-screen w-99vw items-center justify-center absolute z-100 top-0 overflow-hidden">
      <Loader />
    </div>
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
name: home
meta:
  layout: home
</route>

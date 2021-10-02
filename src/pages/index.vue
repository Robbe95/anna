<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const snapV = [0, 1]

  const tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.scroll-trigger',
      pin: '.scroll-screen',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      markers: true,
      // snap: {
      //   snapTo: snapV,
      //   duration: { min: 0.2, max: 1 },
      //   delay: 0.2,
      //   ease: 'power1.inOut',
      // },
    },
  })

  tl.addLabel('start')
    .to('.name', { rotation: 0, y: '40vh' })
})
</script>

<template>
  <div class="h-200vh bg-black flex justify-center scroll-trigger overflow-hidden z-0 relative">
    <div class="text-8xl text-white h-100vh w-full flex items-center justify-center scroll-screen relative z-10">
      <div class="absolute top-0 right-0 z-50 ">
        <div class="h-4 w-screen bg-black">
        </div>
        <div class="from-black to-transparent w-screen h-8 z-50 bg-gradient-to-b">
        </div>
      </div>
      <div class="absolute bottom-0 right-0 z-50 ">
        <div class="from-black to-transparent w-screen h-8 z-50 bg-gradient-to-t">
        </div>
        <div class="h-4 w-screen bg-black">
        </div>
      </div>

      <div class="transform name z-20 rotate-90">
        Anna
      </div>
    </div>
    <div id="images" class="text-base z-10 absolute -top-100vh left-0 -z-10">
      <ImagesBackground />
    </div>
  </div>
  <div class="h-100vh ">
  </div>
</template>

<style scoped>
#images {
    -webkit-perspective:300px;
    -moz-perspective:300px;
    -webkit-perspective-origin:50% 50%;
    -moz-perspective-origin:50% 50%;
    -moz-transform-style: preserve-3d;
    width:100%;
    height:100%;
    perspective: 500;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>

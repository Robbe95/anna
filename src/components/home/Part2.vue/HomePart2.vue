<template>
  <div class=" text-white mt-60 justify-center text-center md:text-left md:px-40 px-4  ">
    <div
      class=" text-5xl flex flex-col items-center justify-center"
    >
      <div class="hi-icon opacity-0 max-w-max mb-20">
        👋
      </div>
      <div class="intro-text text-5xl md:max-w-1/2 font-medium">
        Hallo! Ik ben <span class="anna-font">Anna Leoni</span><br> en hou ervan om <br><span class=""><span class="changing-text">herinneringen</span> vast te leggen.</span>
      </div>
      <HomeInfoCard />
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

const setupWave = () => {
  const waveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hi-icon',
      start: 'center center',
    },
  })

  waveTimeline.to('.hi-icon', { opacity: 1, duration: 0.3 })
    .from('.hi-icon', { y: 80, duration: 0.3, delay: -0.3 })
    .to('.hi-icon', { x: 30, rotate: 30, duration: 0.3 })
    .to('.hi-icon', { x: 0, rotate: 0, duration: 0.3 })
    .to('.hi-icon', { x: 30, rotate: 30, duration: 0.3 })
    .to('.hi-icon', { x: 0, rotate: 0, duration: 0.3 })
}

const typingText = () => {
  const typingTimeline = gsap.timeline({
    repeat: -1,
    scrollTrigger: {
      trigger: '.changing-text',
      start: 'center center',
    },

  })

  typingTimeline.to('.changing-text', { duration: 1, text: { value: 'gezichten' }, ease: 'none', delay: 1, padSpace: true })
    .to('.changing-text', { duration: 1, text: { value: 'momenten' }, ease: 'none', delay: 2 })
    .to('.changing-text', { duration: 1, text: { value: 'emoties' }, ease: 'none', delay: 2, padSpace: true })
    .to('.changing-text', { duration: 1, text: { value: 'impressies' }, ease: 'none', delay: 2, padSpace: true })
    .to('.changing-text', { duration: 1, text: { value: 'herinneringen' }, ease: 'none', delay: 2, padSpace: true })
}

onMounted(() => {
  setupWave()
  typingText()
})
</script>
<style lang="scss" scoped>

</style>

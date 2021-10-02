<template>
  <div class="p-4 h-50vh">
    <div
      ref="image"
      class="bg-dark-400
    text-black
      shadow-lg
      border-1px
    border-gray-500  h-full w-full
      mx-10  flex items-center
      justify-center text-3xl
      image
      "
      :class="['spot-' + spot, 'order-' + spot]"
    >
      {{ spot }}
    </div>
  </div>
</template>

<script setup>

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  spot: Number,
})

const image = ref(null)
gsap.registerPlugin(ScrollTrigger)
const moveUpIfSpot = (moveSpot) => {
  if (props.spot === moveSpot) {
    if (props.spot === 1) gsap.set(image.value, { y: '0vh' })
    if (props.spot === 2) gsap.set(image.value, { y: '-50vh' })
    if (props.spot === 3) gsap.set(image.value, { y: '-100vh' })
  }
}
const order = ref(null)
const selectOrder = () => {
  if (props.spot === 1) order.value = ['50vh', '100vh', '150vh']
  if (props.spot === 2) order.value = ['50vh', '100vh', '0vh']
  if (props.spot === 3) order.value = ['50vh', '-50vh', '0vh']
}

onMounted(() => {
  selectOrder()
  const tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.scroll-trigger',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      markers: true,
    },
  })

  tl.to(image.value, { y: order.value[0], duration: 1 })
    .call(() => moveUpIfSpot(3), null, '>')
    .to(image.value, { y: order.value[1], duration: 1 })
    .call(() => moveUpIfSpot(2), null, '>')
    .to(image.value, { y: order.value[2], duration: 1 })
    .call(() => moveUpIfSpot(1), null, '>')
})

</script>

<style lang="scss" scoped>

</style>

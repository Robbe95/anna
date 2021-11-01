<template>
  <div
    ref="imageDiv"
    class="bg-[#1a1e2d]
      text-black
        shadow-lg
          flex items-center
        justify-center text-3xl
        image
        h-50vh
        w-full
        z-0
        image
        flex flex-col gap-4
        px-10
        overflow-hidden
      "
  >
    <div class="flex flex-row gap-8 items-center w-full ">
      <div class="flex-none h-30 w-30">
        <img class="h-30 w-30 object-cover rounded-2xl flex-none" :src="review.image" />
      </div>
      <div class="text-white text-lg text-left">
        {{ review.name }}
      </div>
    </div>
    <div class="text-white text-sm">
      {{ review.text }}
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const props = defineProps({
  review: Object,
})
const imageDiv = ref(null)

const delay = gsap.utils.random(0, 1, 0.01)
const z = gsap.utils.random(-5, 5, 0.01)
const x = gsap.utils.random(-300, 300, 0.01)
const y = gsap.utils.random(-200, 200, 0.01)
const rotation = gsap.utils.random(-10, 10, 0.01)
const rotationY = gsap.utils.random(-0.2, 0.2, 0.01)
const rotationX = gsap.utils.random(-0.2, 0.2, 0.01)

onMounted(() => {
  gsap.from(imageDiv.value, { opacity: 0, z, y, x, rotation, rotationY, rotationX, force3D: true, delay })
})

</script>

<style scoped>
.image {
    transform: perspective(10px);
}
</style>

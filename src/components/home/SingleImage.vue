<template>
  <div
    ref="imageDiv"
    class="bg-dark-400
      text-black
        shadow-lg
          h-full w-full
          flex items-center
          rounded
        justify-center text-3xl
        image
        h-50vh
        w-full
        z-0
        image
      "
  >
    <img class="object-cover w-full h-full" :src="image" />
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const props = defineProps({
  image: String,
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

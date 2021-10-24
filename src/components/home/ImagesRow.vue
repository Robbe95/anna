<template>
  <div ref="row" class="flex flex-col w-full absolute -top-4000px px-4 ">
    <div ref="row1" class="flex flex-col gap-8 w-full mb-8">
      <SingleImage
        v-for="image in images"
        :key="image.id"
        :image="image"
      >
      </SingleImage>
    </div>
    <div ref="row2" class="flex flex-col gap-8 w-full mb-8">
      <SingleImage
        v-for="image in images"
        :key="image.id"
        :image="image"
      >
      </SingleImage>
    </div>
    <div ref="row3" class="flex flex-col gap-8 w-full mb-8">
      <SingleImage
        v-for="image in images"
        :key="image.id"
        :image="image"
      >
      </SingleImage>
    </div>
  </div>
</template>

<script setup>

import { gsap } from 'gsap'
const props = defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
  speed: {
    type: Number,
    default: 30,
  },
})

const images = [{ id: 1, spot: 2 }, { id: 2, spot: 3 }, { id: 3, spot: 1 }, { id: 4, spot: 1 }, { id: 5, spot: 1 }, { id: 6, spot: 1 }, { id: 7, spot: 1 }]
const row = ref(null)
const row1 = ref(null)
const row2 = ref(null)
const row3 = ref(null)
let height = null

const rows = [row1, row2, row3]
const counter = 1
const infiniteScroll = () => {
  if (!props.reverse) {
    gsap.set(row.value, { y: -20, ease: 'none' }).then(() => {
      gsap.to(row.value, { y: height, duration: props.speed, ease: 'none' }).then(() => {
        infiniteScroll()
      })
    })
  }
  else {
    gsap.set(row.value, { y: 20, ease: 'none' }).then(() => {
      gsap.to(row.value, { y: -height, duration: props.speed, ease: 'none' }).then(() => {
        infiniteScroll()
      })
    })
  }
}

onMounted(() => {
  height = row1.value.offsetHeight
  if (!props.reverse)
    gsap.to(row.value, { y: height, delay: 2, duration: props.speed, ease: 'none' }).then(() => infiniteScroll())
  else
    gsap.to(row.value, { y: -height, delay: 2, duration: props.speed, ease: 'none' }).then(() => infiniteScroll())
})

</script>

<style lang="scss" scoped>

</style>

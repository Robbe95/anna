<template>
  <div ref="row" class="flex flex-col w-full absolute -top-4000px px-4">
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
  images: {
    type: Array,
    default: null,
  },
})
const scrollCounter = ref(1)

const row = ref(null)
const row1 = ref(null)
const row2 = ref(null)
const row3 = ref(null)
let height = null

const rows = [row1, row2, row3]
const counter = 1

const reverseRepeat = (tl) => {
  // eslint-disable-next-line no-use-before-define
  infiniteScrollTimeline.reverse(props.speed) // 0 sets the playhead at the end of the animation
}

const infiniteScrollTimeline = gsap.timeline(
  {
    repeat: -1,
    repeatDelay: 0,
    onReverseComplete: reverseRepeat,
    onReverseCompleteParams: ['{self}'],

  },
)

const faster = () => {
  if (scrollCounter.value < 0)
    infiniteScrollTimeline.reverse()
  infiniteScrollTimeline.timeScale(scrollCounter.value)
}
onMounted(() => {
  height = row1.value.offsetHeight
  infiniteScrollTimeline
    .to(row.value, { y: height, duration: props.speed, ease: 'none' })
    .set(row.value, { y: 0, ease: 'none' })

  document.addEventListener('wheel', (e) => {
    if (e.wheelDelta > 0)
      scrollCounter.value--
    else
      scrollCounter.value++
    faster()
  })

  setInterval(() => {
    if (scrollCounter.value > 1) {
      scrollCounter.value -= scrollCounter.value / 300
      faster()
    }
    if (scrollCounter.value < -1) {
      scrollCounter.value -= scrollCounter.value / 300
      faster()
    }
  })
})

defineExpose({
  faster,
})
</script>

<style scoped>

.images {
}
</style>

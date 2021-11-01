<template>
  <div ref="row" class="flex flex-col w-full absolute -top-4000px px-4 ">
    <div ref="row1" class="flex flex-col gap-8 w-full mb-8">
      <SingleReview
        v-for="review in reviews"
        :key="review?.id"
        :review="review"
      >
      </SingleReview>
    </div>
    <div ref="row2" class="flex flex-col gap-8 w-full mb-8">
      <SingleReview
        v-for="review in reviews"
        :key="review?.id"
        :review="review"
      >
      </SingleReview>
    </div>
    <div ref="row3" class="flex flex-col gap-8 w-full mb-8">
      <SingleReview
        v-for="review in reviews"
        :key="review?.id"
        :review="review"
      >
      </SingleReview>
    </div>
    <div ref="row4" class="flex flex-col gap-8 w-full mb-8">
      <SingleReview
        v-for="review in reviews"
        :key="review?.id"
        :review="review"
      >
      </SingleReview>
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
  reviews: {
    type: Array,
    default: null,
  },
})

console.log(props.reviews)
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

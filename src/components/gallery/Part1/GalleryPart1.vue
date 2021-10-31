<template>
  <div class=" relative z-20 min-h-screen">
    <div class="z-50 relative text-white">
      <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-25xl  opacity-10 -z-10 px-20 anna-font">
        Gallery
      </div>
      <Header class="z-50 mb-32 p-20" />
      <div class="text-4xl mb-12 px-20" @click="moveScrollbar('right')">
        My camera loves <span class="italic">you</span>.
      </div>
      <GalleryFilter class="px-20" @scrollLeft="moveScrollbar('left')" @scrollRight="moveScrollbar('right')" />
      <div class="pl-20">
        <div class="mt-4 flex flex-row h-96 overflow-x-visible gap-8  no-scrollbar top-scrollbar pb-10  ">
          <transition-group
            name="fade"
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
          >
            <img
              v-for="(shownImage, key) in shownImages"
              :key="key + shownImage"
              class="image border-1px border-gray-300 border-opacity-30 object-cover child-top-scrollbar"
              :src="shownImage"
              :data-index="key"
              :data-entries="shownImages.length"
            />
          </transition-group>
        </div>
      </div>
      <div class="flex flex-row gap-4 px-20 py-8 text-lg">
        <RouterLink class="btn-primary flex flex-row items-center gap-2" to="/?scrollTo=prices">
          Prijzen
          <ArrowIcon class="transform -rotate-45" />
        </RouterLink>
        <RouterLink class="btn-secondary flex flex-row items-center gap-2" to="/contact">
          Contact
          <ArrowIcon class="transform -rotate-45" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import ArrowIcon from '~icons/bi/arrow-right-circle'

import { useGallery } from '@/stores/gallery'
const galleryStore = useGallery()
const shownImages = computed(() => galleryStore.currentImages.images)
let isScrolling = false

const beforeEnter = (el) => {
  el.style.opacity = 0
}
const enter = (el, done) => {
  const delayHelper = 1 / el.dataset.entries
  const maxDelay = ((el.dataset.entries - 1) * 0.5) + 1
  gsap.set(el, {
    y: -20,
  })

  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: Math.min(maxDelay, 1 + (0.5 - el.dataset.index * Math.max(0.15, delayHelper))),
    onComplete: done,
  })
}
const leave = (el, done) => {
  const delayHelper = 1 / el.dataset.entries
  const maxDelay = el.dataset.entries * 0.5
  gsap.to(el, {
    opacity: 0,
    y: -20,
    delay: Math.min(maxDelay, 0.5 - el.dataset.index * Math.max(0.15, delayHelper)),
    onComplete: done,
  })
}

// const enter = (el, done) => {
//   const delayHelper = 1 / el.dataset.entries
//   const maxDelay = ((el.dataset.entries - 1) * 0.5) + 1
//   gsap.set(el, {
//     y: -20,
//   })
//   gsap.to(el, {
//     opacity: 1,
//     duration: 0.5,
//     delay: 0.5,
//     onComplete: done,
//     y: 0,
//   })
// }
// const leave = (el, done) => {
//   const delayHelper = 1 / el.dataset.entries
//   const maxDelay = el.dataset.entries * 0.5
//   gsap.to(el, {
//     opacity: 0,
//     y: -20,
//     delay: 0,
//     duration: 0.5,
//     onComplete: done,
//   })
// }

const sideScroll = (element, direction, speed, distance, step) => {
  let scrollAmount = 0
  if (!isScrolling) {
    isScrolling = true
    const slideTimer = setInterval(() => {
      if (direction === 'left')
        element.scrollLeft -= step
      else
        element.scrollLeft += step

      scrollAmount += step
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer)
        isScrolling = false
      }
    }, speed)
  }
}

// onMounted(() => {
//   const scrollbar = document.querySelector('.top-scrollbar')
//   scrollbar.addEventListener('scroll', (event) => {
//     console.log(event)
//     if (event.target.scrollLeft === event.target.scrollWidth && slideDirection === 'right')
//       slideDirection = 'left'
//     if (event.target.scrollLeft === 0 && slideDirection === 'left')
//       slideDirection = 'right'
//   })
// })

const moveScrollbar = (direction) => {
  const elmnt = document.querySelector('.top-scrollbar')
  sideScroll(elmnt, direction, 10, window.screen.width, 20)
}

</script>

<style scoped>

.top-scrollbar {
  transform: rotateX(180deg);
  overflow-x: auto;
}
.child-top-scrollbar {
  transform: rotateX(180deg);
}
.no-scrollbar::-webkit-scrollbar {
  width: 300px;
  padding: 20px;
  height: 3px;
  margin-bottom: 300px;
  border-radius: 50%;
  margin: 30px 30px;
}

/* Track */
.no-scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  margin-right: 5rem;

}

/* Handle */
.no-scrollbar::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 10px;
  transition: all 0.5s;
}

/* Handle on hover */
.no-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #0080ff;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>

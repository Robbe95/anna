<template>
  <div class="h-200vh  flex justify-center scroll-trigger z-0 relative">
    <div class="text-8xl text-white h-100vh w-screen flex items-center justify-center scroll-screen relative z-10">
      <div class="absolute top-0 right-0 z-50 ">
        <div class="h-8 w-screen bg-background z-50 ">
        </div>
        <div class="from-background to-transparent w-screen h-8 z-10 bg-gradient-to-b">
        </div>
      </div>

      <div class="transform name z-50 relative overflow-visible">
        <div class="absolute name-text w-screen flex items-center justify-center transform rotate-270 anna-font z-50 min-w-max">
          Anna Leoni
        </div>
      </div>
    </div>
    <div class="">
      <div class="relative h-200vh w-screen overflow-hidden">
        <div id="images" class="text-base z-10 absolute -top-100vh left-0 -z-10 bottom-0">
          <ImagesBackground />
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 right-0 z-0 ">
      <div class="from-transparent  to-background w-screen h-8 z-10 bg-gradient-to-b">
      </div>
    </div>
  </div>
  <div id="content-div z-99">
    <div class="flex items-center justify-center">
      <HomeNavigation :show-nav="showNav" @gotoWebsite="gotoWebsite" />
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const showNav = ref(false)
const gotoWebsite = () => {
  gsap.to(window, { duration: 5, scrollTo: { y: '#content-div', offsetY: 250 } })
}
onMounted(() => {
  const snapV = [0, 1]

  const tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.scroll-trigger',
      pin: '.scroll-screen',
      start: 'top top-=300',
      end: 'bottom bottom-=300',
      ease: 'none',
      scrub: 1,
      // snap: {
      //   snapTo: snapV,
      //   duration: { min: 0.2, max: 1 },
      //   delay: 0.2,
      //   ease: 'power1.inOut',
      // },
    },
  })

  tl.addLabel('start')
    .to('.name-text', { rotation: 0, y: '50vh', scale: 0.7 })
  gsap.set('.goto-button', { top: '90vh' })

  const tlButton = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.scroll-trigger',
      pin: '.goto-button',
      start: 'top top',
      end: 'bottom bottom-=200px',
      scrub: 1,
    },
  })
  ScrollTrigger.matchMedia({
    '(min-width: 800px)': function() {
      tlButton.addLabel('start')
        .from('.goto-button', { duration: 1 })
        .to('.goto-button', { x: '35vw', duration: 0.5 })
        // .to('.goto-button', { x: '-50px', duration: 0.5 })

        .call(() => {
          showNav.value = !showNav.value
        }, null, '>',
        )
        .to('.goto-button', { duration: 0.1 })
    },
    '(max-width: 799px)': function() {
      tlButton.addLabel('start')
        .from('.goto-button', { duration: 1 })
      // .to('.goto-button', { x: '35vw', duration: 0.5 })
        .to('.goto-button', { x: '-50px', duration: 0.5 })

        .call(() => {
          showNav.value = !showNav.value
        }, null, '>',
        )
        .to('.goto-button', { duration: 0.1 })
    },

  })
})
</script>

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

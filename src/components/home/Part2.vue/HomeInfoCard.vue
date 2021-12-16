<template>
  <div class="flex flex-col md:flex-row justify-between mt-40 gap-30 md:gap-0 items-center ">
    <div class="text text-base md:w-1/2 text-left flex-none font-medium">
      <div class="md:pr-20 text-lg px-4">
        De mooiste gebeurtenissen in ons leven willen we eeuwig koesteren:
        <br />
        huwelijken, geboortes, zwangerschappen, verjaardagen, communies, jubileums, pensioenfeesten,...
        <br />
        Maar net zo goed spontane momenten die we delen met familie en vrienden.
        <br /><br />
        Mijn doel is om van jouw meest kostbare momenten tijdloze herinneringen te maken. Maak dus kennis met mij en m'n camera.
        <br /><br />
        xoxo
        <br /><br />
        Anna
      </div>
      <div class="flex md:flex-row flex-col gap-6 mt-4 text-lg md:justify-start justify-center items-center">
        <RouterLink class="btn-primary flex flex-row items-center gap-2 max-w-max" to="/gallery">
          Gallerij
          <ArrowIcon class="transform -rotate-45" />
        </RouterLink>
        <RouterLink class="btn-secondary flex flex-row items-center gap-2 max-w-max" to="/contact">
          Contact
          <ArrowIcon class="transform -rotate-45" />
        </RouterLink>
      </div>
    </div>

    <div class="images flex flex-col gap-8 flex-none w-full" @mouseover="togglePictures" @mouseleave="togglePictures">
      <div class="flex flex-col md:flex-row gap-8 relative z-20">
        <div class="absolute -top-5vh left-30vw ">
          <img class="h-90vh object-cover" src="@/assets/images/rectangle.svg" />
        </div>
        <div ref="imageDiv1" class=" z-10 relative">
          <img ref="image1" class="h-80vh z-10 object-cover" src="@/assets/images/anna.png" />
        </div>
        <div ref="imageDiv2" class=" z-10 relative">
          <img ref="image2" class="h-80vh z-10 object-cover" src="@/assets/images/anna2.png" />
        </div>
      </div>
      <div class="text-3xl z-10">
        #💙🐕
      </div>
    </div>
    <div class="">
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import ArrowIcon from '~icons/bi/arrow-right-circle'
const imageDiv1 = ref(null)
const imageDiv2 = ref(null)

const image1 = ref(null)
const image2 = ref(null)

let isSwapped = false
let swapping = false

const resetPictures = () => {
  if (!swapping) {
    swapping = true

    const imageBox1 = image1.value.getBoundingClientRect()
    const imageBox2 = image2.value.getBoundingClientRect()

    imageDiv2.value.appendChild(image2.value)
    imageDiv1.value.appendChild(image1.value)

    const imageNewBox1 = image1.value.getBoundingClientRect()
    const imageNewBox2 = image2.value.getBoundingClientRect()

    gsap.from(image1.value, {
      x: imageBox1.left - imageNewBox1.left,
      y: imageBox1.top - imageNewBox1.top,
      ease: 'Power3.easeOut',
      duration: 1,
    })

    gsap.from(image2.value, {
      x: imageBox2.left - imageNewBox2.left,
      y: imageBox2.top - imageNewBox2.top,
      ease: 'Power3.easeOut',
      duration: 1,

    }).then(() => {
      swapping = false
      isSwapped = false
    })
  }
}

const swapPictures = () => {
  if (!swapping) {
    swapping = true
    const imageBox1 = image1.value.getBoundingClientRect()
    const imageBox2 = image2.value.getBoundingClientRect()

    imageDiv2.value.appendChild(image1.value)
    imageDiv1.value.appendChild(image2.value)

    const imageNewBox1 = image1.value.getBoundingClientRect()
    const imageNewBox2 = image2.value.getBoundingClientRect()

    gsap.from(image1.value, {
      x: imageBox1.left - imageNewBox1.left,
      y: imageBox1.top - imageNewBox1.top,
      ease: 'Power3.easeOut',
      duration: 1,
    })

    gsap.from(image2.value, {
      x: imageBox2.left - imageNewBox2.left,
      y: imageBox2.top - imageNewBox2.top,
      ease: 'Power3.easeOut',
      duration: 1,

    }).then(() => {
      swapping = false
      isSwapped = true
    })
  }
}
const togglePictures = () => {
  if (isSwapped)
    resetPictures()
  else
    swapPictures()
}

</script>

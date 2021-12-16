<script setup>
import { useGallery } from '@/stores/gallery'

const galleryStore = useGallery()
const allImages = computed(() => Object.values(galleryStore.allImages.find(x => x.category === 'Alles').images).map(x => x.default))

const chosenImages = ref([])
const chooseImages = () => {
  let alreadyChosenImages = []
  const imagesAmount = allImages.value.length
  for (let i = 0; i < 35; i++) {
    const randomImage = Math.floor(Math.random() * imagesAmount)
    if (!alreadyChosenImages.includes(randomImage)) {
      alreadyChosenImages.push(randomImage)
      chosenImages.value.push(allImages.value[randomImage])
    }
    else { i-- }
    if (alreadyChosenImages.length === imagesAmount - 1)
      alreadyChosenImages = []
  }
}

chooseImages()

const testAnimation = ref(null)

const faster = () => {
  testAnimation.value.faster()
}
</script>

<template>
  <div class="relative bg-background overflow-hidden min-w-screen min-h-screen">
    <NewAnimationTest ref="testAnimation" class="xl:w-1/5 w-1/2" :images="chosenImages.slice(0, 7)" :speed="scrollCounter" />
    <Test />
  </div>
</template>

<style lang="scss" scoped>

</style>

<style scoped>
</style>

<route lang="yaml">
name: animation-test
meta:
  layout: empty
</route>

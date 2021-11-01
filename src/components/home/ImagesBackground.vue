<template>
  <div class="flex flex-row gap-8 w-full h-full">
    <ImagesRow class="xl:w-1/5 w-1/2" :images="chosenImages.slice(0, 7)" />
    <ImagesRow class="mt-20vh xl:left-20vw xl:w-1/5 w-1/2 left-50vw" :reverse="true" :images="chosenImages.slice(7, 14)" />
    <ImagesRow class="mt-40vh left-40vw xl:w-1/5 w-1/2 hidden xl:flex" :images="chosenImages.slice(14, 21)" />
    <ImagesRow class="mt-60vh left-60vw xl:w-1/5 w-1/2 hidden xl:flex" :reverse="true" :images="chosenImages.slice(21, 28)" />
    <ImagesRow class="mt-80vh left-80vw xl:w-1/5 w-1/2 hidden xl:flex" :images="chosenImages.slice(28, 35)" />
  </div>
</template>

<script setup>
import { useGallery } from '@/stores/gallery'

const galleryStore = useGallery()
const allImages = computed(() => Object.values(galleryStore.allImages.find(x => x.category === 'Alles').images).map(x => x.default))
const chosenImages = ref([])
const props = defineProps({
  offset: {
    type: Number,
    default: 0,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})

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
</script>

<style lang="scss" scoped>

</style>

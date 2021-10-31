<template>
  <div class="flex flex-row gap-8 justify-between">
    <div class="flex flex-row flex-wrap gap-8 mb-10">
      <div
        v-for="filter in possibleFilters "
        :key="filter"
        class="text-2xl transition-all"
        :class="[currentFilter === filter ? 'opacity-100' : 'opacity-30']"
        @click="switchImages(filter)"
      >
        {{ filter }}
      </div>
    </div>
    <div class="flex flex-col justify-end items-end">
      <div class="flex flex-row gap-2 justify-self-end justify-items-end cursor-pointer">
        <ArrowIcon class="text-2xl transform rotate-180" @click="scrollLeft" />
        <ArrowIcon class="text-2xl" @click="scrollRight" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowIcon from '~icons/bi/arrow-right-circle'

import { useGallery } from '@/stores/gallery'
const galleryStore = useGallery()
const shownImages = computed(() => galleryStore.currentImages.images)
const possibleFilters = computed(() => galleryStore.possibleFilters)
const currentFilter = computed(() => galleryStore.currentFilter)
const emit = defineEmits(['scrollRight', 'scrollLeft'])
const scrollRight = () => emit('scrollRight')
const scrollLeft = () => emit('scrollLeft')
const switchImages = (filter) => {
  const elmnt = document.querySelector('.top-scrollbar')
  elmnt.scrollLeft = 0
  galleryStore.currentFilter = filter
}

</script>

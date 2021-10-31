import { defineStore } from 'pinia'
import { WeddingImages, CommercialImages, CommunionImages, FamilyImages, GirlsnightImages, KidsImages, PregnantImages } from '@/logic/images.js'
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application

export const useGallery = defineStore('gallery', {
  // other options...
  state: () => ({
    allImages: [
      {
        category: 'Huwelijk',
        images: WeddingImages,
      },
      {
        category: 'Commercieel',
        images: CommercialImages,
      },
      {
        category: 'Communie',
        images: CommunionImages,
      },
      {
        category: 'Familie',
        images: FamilyImages,
      },
      {
        category: 'Vrouwenavond',
        images: GirlsnightImages,
      },
      {
        category: 'Kids',
        images: KidsImages,
      },
      {
        category: 'Zwangerschap',
        images: PregnantImages,
      },
    ],
    currentFilter: 'Huwelijk',
  }),

  getters: {
    currentImages() {
      return this.allImages.find(x => this.currentFilter === x.category)
    },
    possibleFilters() {
      return this.allImages.map(x => x.category)
    },
  },
})

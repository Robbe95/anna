// import WeddingImage1 from '@/assets/images/gallery/wedding/image1.png'
// import CommercialImage1 from '@/assets/images/gallery/commercial/image1.png'
// import CommunionImage1 from '@/assets/images/gallery/communion/image1.png'
// import FamilyImage1 from '@/assets/images/gallery/family/image1.png'
// import GirlsnightImage1 from '@/assets/images/gallery/girlsnight/image1.png'
// import KidsImage1 from '@/assets/images/gallery/kids/image1.png'
// import PregnantImage1 from '@/assets/images/gallery/pregnant/image1.png'

// const weddingImages = [WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1, WeddingImage1]
// const commercialImages = [CommercialImage1]
// const communionImages = [CommunionImage1]
// const familyImages = [FamilyImage1]
// const girlsnightImages = [GirlsnightImage1]
// const kidsImages = [KidsImage1]
// const pregnantImages = [PregnantImage1]

const weddingImages = import.meta.globEager('../assets/images/gallery/wedding/*.png')
const commercialImages = import.meta.globEager('../assets/images/gallery/commercial/*.png')
const communionImages = import.meta.globEager('../assets/images/gallery/communion/*.png')
const familyImages = import.meta.globEager('../assets/images/gallery/family/*.png')
const girlsnightImages = import.meta.globEager('../assets/images/gallery/girlsnight/*.png')
const kidsImages = import.meta.globEager('../assets/images/gallery/kids/*.png')
const pregnantImages = import.meta.globEager('../assets/images/gallery/pregnant/*.png')
const allImages = import.meta.globEager('../assets/images/gallery/**/*.png')

const pngs = import.meta.globEager('/src/assets/*.png')
const jpegs = import.meta.globEager('/src/assets/*.jpeg')

export const WeddingImages = weddingImages
export const CommercialImages = commercialImages
export const CommunionImages = communionImages
export const FamilyImages = familyImages
export const GirlsnightImages = girlsnightImages
export const KidsImages = kidsImages
export const PregnantImages = pregnantImages
export const AllImages = allImages

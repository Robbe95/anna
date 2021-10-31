<template>
  <div class=" text-white mt-60 px-2 text-center md:px-40 flex flex-col gap-20 items-center justify-center relative">
    <div class="absolute right-0 top-20">
      <img src="@/assets/images/circle.svg" />
    </div>
    <div id="prices" class="text-white px-2 text-center md:px-40 flex flex-col gap-20 items-center justify-center relative">
      <div class="flex items-center flex-col gap-3">
        <div class="text-7xl font-bold">
          Money <span class="relative strike-center italic">money</span> money
        </div>
        <div class="anna-font text-lg">
          Onbetaalbare herinneringen
        </div>
      </div>
      <div class="min-w-50vw">
        <PriceItem v-for="item in items" :key="item.name" :item="item" />
      </div>
      <div class="max-w-md text-center text-lg font-bold">
        Alle fotos (& vermogensrechten) op deze website zijn eigendom van bvba fato en mogen op geen enkele manier gebruikt worden zonder toestemming.
      </div>
    </div>
    <div>
      <ScrollingText />
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    name: 'Portret',
    price: 8900,
  },
  {
    name: 'Fotosessie',
    price: 2500,
  },
  {
    name: 'Fotoshoot ter plaatse',
    price: 16500,
  },
  {
    name: 'Bedankkaartje',
    price: 8900,
  },
  {
    name: 'Special effect',
    price: 8900,
  }, {
    name: 'Vrouwenavond',
    price: 24900,
  }, {
    name: 'Fotoreportage',
    price: 'Op aanvraag',
  }, {
    name: 'Commercieel',
    price: 'Op aanvraag',
  },
]
onMounted(() => {
})
</script>
<style scoped>
.strike-center:after {
    border-top: 4px solid white;
    position: absolute;
    content: "";
    right: 0;
    top:55%;
    left: 0;
}
</style>

<template>
  <div
    class="absolute goto-button min-w-max bg-blue-500 bg-blue-500 py-2 px-4 rounded-3xl text-base text-white flex items-center width-trans justify-center cursor-pointer -translate-x-1/2"
    :style="[showNav ?'width: 250px; max-width: 300px' : 'width: 150px; max-width: 300px' ]"
  >
    <transition name="fade" mode="out-in">
      <div v-if="showNav" class="flex flex-row gap-4  relative ">
        <a href="/" class="font-bold">Home</a>
        <a href="/gallery" class="opacity-50">Galerij</a>
        <a href="/contact" class="opacity-50">Contact</a>
      </div>
      <div v-else class=" relative" @click="gotoWebsite">
        Ontdekken
      </div>
    </transition>
  </div>
</template>

<script setup>
const emit = defineEmits(['gotoWebsite'])
const gotoWebsite = id => emit('gotoWebsite', id)

const props = defineProps({
  showNav: Boolean,
})
</script>

<style  scoped>
.width-trans {
  transition: width 0.5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

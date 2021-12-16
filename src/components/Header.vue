<template>
  <div class="flex flex-col md:flex-row justify-between items-center text-white">
    <div class="md:w-1/3">
    </div>
    <div class="anna-font text-4xl text-center md:w-1/3 flex items-center justify-center">
      <img src="@/assets/logo.svg" alt="logo" class="h-2rem" />
    </div>
    <div class="md:w-1/3 flex md:justify-end justify-center items-center mt-4 md:mt-0">
      <div
        class="max-w-max goto-button min-w-max bg-blue-500 bg-blue-500 py-2 px-10 rounded-3xl text-base text-white flex items-center width-trans justify-center cursor-pointer width: 250px; max-width: 300px"
      >
        <transition name="fade" mode="out-in">
          <div class="flex flex-row gap-4  relative ">
            <a href="/" :class="[routeName === 'home' ? 'font-bold' : 'opacity-50' ]">Home</a>
            <a href="/gallery" :class="[routeName === 'gallery' ? 'font-bold' : 'opacity-50' ]">Galerij</a>
            <a href="/contact" :class="[routeName === 'contact' ? 'font-bold' : 'opacity-50' ]">Contact</a>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = ref(route.name)
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

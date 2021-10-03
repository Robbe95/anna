<template>
  <div class="flex flex-row gap-8 w-full">
    <ImagesRow class="xl:w-1/5 w-1/2" />
    <ImagesRow class="mt-20vh xl:left-20vw xl:w-1/5 w-1/2 left-50vw" />
    <ImagesRow class="mt-40vh left-40vw xl:w-1/5 w-1/2 hidden xl:flex" />
    <ImagesRow class="mt-60vh left-60vw xl:w-1/5 w-1/2 hidden xl:flex" />
    <ImagesRow class="mt-80vh left-80vw xl:w-1/5 w-1/2 hidden xl:flex" />
  </div>
</template>

<script setup>

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
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="flex flex-col gap-8 w-full">
    <div
      v-for="image in images"
      :key="image.id"
      class="bg-dark-400
      text-black
        shadow-lg
        border-1px
      border-gray-500  h-full w-full
          flex items-center
        justify-center text-3xl
        image
        h-50vh
        w-full
      "
    >
      {{ image.id }}
    </div>
  </div>
</template>

<script setup>

const images = [{ id: 1, spot: 2 }, { id: 2, spot: 3 }, { id: 3, spot: 1 }, { id: 4, spot: 1 }, { id: 5, spot: 1 }, { id: 6, spot: 1 }, { id: 7, spot: 1 }]
</script>

<style lang="scss" scoped>

</style>

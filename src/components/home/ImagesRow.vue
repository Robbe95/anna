<template>
  <div class="flex flex-col gap-8 w-full">
    <SingleImage
      v-for="image in images"
      :key="image.id"
      :image="image"
    >
    </SingleImage>
  </div>
</template>

<script setup>

const images = [{ id: 1, spot: 2 }, { id: 2, spot: 3 }, { id: 3, spot: 1 }, { id: 4, spot: 1 }, { id: 5, spot: 1 }, { id: 6, spot: 1 }, { id: 7, spot: 1 }]
</script>

<style lang="scss" scoped>

</style>

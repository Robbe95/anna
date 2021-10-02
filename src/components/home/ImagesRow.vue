<template>
  <div class="">
    <SingleImage
      v-for="image in images"
      :key="image.id"
      :spot="image.id"
    />
  </div>
</template>

<script setup>

const images = [{ id: 1, spot: 2 }, { id: 2, spot: 3 }, { id: 3, spot: 1 }]
</script>

<style lang="scss" scoped>

</style>

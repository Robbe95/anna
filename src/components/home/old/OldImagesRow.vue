<template>
  <div class="">
    <SingleImage
      v-for="image in images"
      :key="image.id"
      :spot="image.id"
      :offset="offset"
    />
  </div>
</template>

<script setup>

const images = [{ id: 1, spot: 2 }, { id: 2, spot: 3 }, { id: 3, spot: 1 }]

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

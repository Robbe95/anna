<template>
  <div ref="row" class="flex flex-col h-200 items-center justify-center">
    <!-- image rotating on hover -->
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 3d button  */

.bounce {
  animation: flyingInFromLeft 1.2s infinite ease-in-out;
}
@keyframes flyingInFromLeft {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>

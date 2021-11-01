<template>
  <div class="text-white relative">
    <div class="absolute -top-10vh ">
      <img src="@/assets/images/rectangle-left.svg" />
    </div>
    <div class="md:pr-20 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
      <div class="text-5xl flex flex-col gap-4 w-full md:w-1/2 md:pl-40 font-bold">
        <div>
          <span class="italic">Good-looking</span> people
        </div>
        <div class="">
          Good-looking <span class="italic">pictures</span>.
        </div>
      </div>
      <div class="relative w-full md:w-1/2 h-60vh  md:block overflow-hidden">
        <div class="z-20 absolute top-0 from-background bg-gradient-to-b w-full h-10 to-transparent">
        </div>
        <div class="z-20 absolute bottom-0 from-background bg-gradient-to-t w-full h-10 to-transparent">
        </div>
        <ReviewRow class="right-0 md:w-1/2 w-full" />
        <ReviewRow class="mt-20vh hidden md:block md:w-1/2" :reverse="true" />
      </div>
    </div>
  </div>
  <div class="h-120"></div>
</template>

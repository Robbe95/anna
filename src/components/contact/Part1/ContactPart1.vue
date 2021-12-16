<template>
  <div class="px-4 md:p-20 md:px-40 relative z-20 min-h-screen mb-10">
    <div class="z-50 relative">
      <Header class="z-50" />
    </div>

    <img class="z-0 w-full h-full object-cover absolute top-0 left-0 pointer-events-none" src="@/assets/images/contact-background.png" />
    <div class="w-full mt-40">
      <div class="text-8xl text-white w-full text-center font-medium">
        Get in <span class="italic">touch</span>.
      </div>
      <div>
        <ContactForm />
      </div>
      <div class="z-20 absolute bottom-0 from-background bg-gradient-to-t w-screen md:-left-10 left-0 h-10 to-transparent">
      </div>
    </div>
  </div>
</template>

<template>
  <div class=" p-20 relative z-20">
    <div class="z-50 relative">
      <Header class="z-50" />
    </div>

    <img class="z-0 w-full h-full object-cover absolute top-0 left-0 pointer-events-none" src="@/assets/images/contact-background.png" />
    <div class="w-full mt-40">
      <div class="text-8xl text-white w-full text-center">
        Get in touch.
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
    <div class="z-20 absolute bottom-0 from-background bg-gradient-to-t w-screen -left-10 h-10 to-transparent">
    </div>
  </div>
</template>

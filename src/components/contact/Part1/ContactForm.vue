<template>
  <div class="flex flex-col md:flex-row gap-12 text-white mt-20">
    <div class="flex flex-col md:w-1/4">
      <div class="h-2px bg-white w-full mb-6"></div>
      <div class="font-bold text-xl mb-4">
        Contact
      </div>
      <div class=" text-lg">
        Kuringersteenweg 171,
      </div>
      <div class="text-lg mb-4">
        3500 Hasselt
      </div>
      <div class="text-lg">
        info@annaleoni.be
      </div>
    </div>
    <div class="flex flex-col md:w-3/4">
      <div class="h-2px bg-primary w-full mb-6"></div>
      <div class="font-bold text-xl mb-4">
        Gecontacteerd worden
      </div>
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex flex-col gap-4 md:w-1/4">
          <input class="bg-[#1a1e2d] opacity-100 px-4 py-1 rounded-2xl bg-opacity-100 border-2px border-white placeholder-white placeholder-opacity-30" placeholder="Voornaam" />
          <input class="bg-[#1a1e2d] opacity-100 px-4 py-1 rounded-2xl border-2px border-white placeholder-white placeholder-opacity-30" placeholder="Naam" />
        </div>
        <textarea class="bg-[#1a1e2d] opacity-100 px-4 py-1 rounded-2xl md:w-3/4 border-2px border-white placeholder-white placeholder-opacity-30" placeholder="Je bericht" />
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-end mt-4 md:mt-0">
    <div class="btn-primary">
      Versturen
    </div>
  </div>
</template>

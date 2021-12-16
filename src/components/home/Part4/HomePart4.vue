<template>
  <div class="text-white relative">
    <div class="absolute -top-10vh ">
      <img src="@/assets/images/rectangle-left.svg" />
    </div>
    <div class="md:pr-20 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
      <div class="text-5xl flex flex-col gap-4 w-full md:w-1/2 md:pl-40 font-semibold">
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
        <ReviewRow class="right-0 lg:w-1/2 w-full" :reviews="reviews.slice(0, 3)" />
        <ReviewRow class="mt-20vh hidden lg:block md:w-1/2" :reverse="true" :reviews="reviews.slice(3, 6)" />
      </div>
    </div>
  </div>
  <div class="h-120"></div>
</template>

<script setup>
import WeddingImage1 from '@/assets/images/gallery/wedding/8.png'

const reviews = [
  {
    id: 1,
    name: 'Leander Nelissen',
    text: 'Stare at the wall, play with food and get confused by dust jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans so touch my tail, i shred your hand purrrr and i rule on my back you rub my tummy i bite you hard kitty touch water with paw then recoil in horror.',
    image: WeddingImage1,
  },
  {
    id: 2,
    name: 'Jolien Vervoort',
    text: 'Flee in terror at cucumber discovered on floor flex claws on the human\'s belly and purr like a lawnmower slap the dog because cats rule or purr purr purr until owner pets why owner not pet me hiss scratch meow so catch small lizards, bring them into house, then unable to find them on carpet but lounge in doorway milk the cow.',
    image: WeddingImage1,
  },
  {
    id: 3,
    name: 'Ellen Theuwen',
    text: 'Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food pose purrfectly to show my beauty for purr, yet walk on car leaving trail of paw prints on hood and windshield. Stinky cat grab pompom in mouth and put in water dish and make it to the carpet before i vomit mmmmmm meowwww and bury the poop bury it deep gnaw the corn cob.',
    image: WeddingImage1,
  },
  {
    id: 4,
    name: 'Ellen Hermans',
    text: 'Purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow destroy the blinds and purr lick the plastic bag. Lick butt and make a weird face cat sit like bread or licks your face so shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.',
    image: WeddingImage1,
  },
  {
    id: 5,
    name: 'Robbe Vaes',
    text: 'Sees bird in air, breaks into cage and attacks creature love. Find something else more interesting kick up litter or meow. Scratch purr for no reason kitty loves pigs for climb a tree, wait for a fireman jump to fireman then scratch his face but play with twist ties.',
    image: WeddingImage1,
  },
  {
    id: 6,
    name: 'Bert Bijnens',
    text: 'Vommit food and eat it again. Run around the house at 4 in the morning lick arm hair yet knock over christmas tree or burrow under covers. Bury the poop bury it deep meow meow you are my owner so here is a dead bird but demand to be let outside at once, and expect owner to wait for me as i think about it for sniff catnip and act crazy purrr purr littel cat, little cat purr purr. Kitty.',
    image: WeddingImage1,
  },
]
</script>

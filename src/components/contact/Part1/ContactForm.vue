<template>
  <div class="relative w-full">
    <transition name="fade" mode="out-in">
      <div v-if="!formIsSent" ref="form" class="mt-20">
        <div class="flex flex-col md:flex-row gap-12 text-white">
          <div class="flex flex-col md:w-1/4">
            <div class="h-2px bg-white w-full mb-6"></div>
            <div class="font-semibold text-xl mb-6">
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
            <div class="font-semibold text-xl mb-6">
              Gecontacteerd worden
            </div>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex flex-col gap-4 md:w-1/4">
                <input v-model="firstName" class="bg-[#1a1e2d] opacity-100 px-4 py-1 rounded-2xl bg-opacity-100 border-2px border-white placeholder-white placeholder-opacity-30" placeholder="Voornaam" />
                <input v-model="lastName" class="bg-[#1a1e2d] opacity-100 px-4 py-1 rounded-2xl border-2px border-white placeholder-white placeholder-opacity-30" placeholder="Naam" />
              </div>
              <textarea v-model="message" class="bg-[#1a1e2d] opacity-100 px-4 py-1 rounded-2xl md:w-3/4 border-2px border-white placeholder-white placeholder-opacity-30" placeholder="Je bericht" />
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-end mt-6 md:mt-0 z-50">
          <button class="btn-primary transition-all z-50" :disabled="!formReady || formLoading" :class="[formReady && !formLoading ? 'opacity-100': 'opacity-40']" @click="sendForm()">
            <div v-if="formLoading" class="lds-dual-ring"></div>
            <div v-else>
              Versturen
            </div>
          </button>
        </div>
      </div>
      <div v-else class=" mt-20" :style="'height: ' + minHeight + 'px'">
        <div class="flex flex-row items-center justify-center left-1/2 transform -translate-x-1/2 absolute mb-20" :style="'height: ' + minHeight + 'px'">
          <div class="bg-primary rounded-full flex items-center justify-center checkmark-circle-1">
            <div class="bg-white rounded-full flex items-center justify-center checkmark-circle-2">
              <svg
                class="w-8vw h-8vw md:w-3vw md:h-3vw"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              ><g
                class="checkmark"
                fill="none"
                stroke="rgb(0, 128, 255)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="5"
              ><path d="M2 20l10 8L30 4" /></g></svg>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import axios from 'axios'
const firstName = ref()
const lastName = ref()
const message = ref()
const form = ref()
const minHeight = ref()
const formLoading = ref(false)
const formReady = computed(() => {
  if (!firstName.value || firstName.value === '' || !lastName.value || lastName.value === '' || !message.value || message.value === '')
    return false
  return true
})
onMounted(() => {
  minHeight.value = form.value.offsetHeight
})
const formIsSent = ref(false)
const sendForm = async() => {
  formLoading.value = true
  const templateParams = {
    firstName: firstName.value,
    lastName: lastName.value,
    message: message.value,
  }

  axios.defaults.baseURL = 'https://api.emailjs.com/api/v1.0/'
  const response = await axios.post('/email/send',
    {
      service_id: 'Anna-website',
      template_id: 'template_hnkt1jr',
      user_id: 'user_pSJi4ISfDkhHmsskBLO3T',
      template_params: templateParams,
    })
    .then((response) => {
      formIsSent.value = true
      formLoading.value = false
    }).catch((error) => {
      console.error(error)
      formLoading.value = false
    })
}
const successForm = () => {

}
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 1rem;
  height: 1rem;;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: 3px;
  border-radius: 50%;
  border: 2px solid black;
  border-color: black transparent black transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
  .title-font {
  font-family: interstate, sans-serif;
  font-style: normal;
 }

 .checkmark-circle-1 {
    animation: w80 0.5s ease forwards;
    animation-delay: 0.2s;

}
@keyframes w80 {
    from { width: 0px; height: 0px; }
    to { width: 24vw; height: 24vw; }
}

.checkmark-circle-2 {
  animation: w56 0.5s ease forwards;
  animation-delay: 0.45s;
  width: 0px;
}
@keyframes w56 {
    from { width: 0px; height: 0px; }
    to { width: 18vw; height: 18vw; }
}

.checkmark {
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: dash 0.5s linear forwards;
  animation-delay: 0.75s;

}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.top-calc {
  top: calc(50vh - 24vw)
}

@media (min-width: 768px) {
  .checkmark-circle-1 {
    animation: w80 0.5s ease forwards;
    animation-delay: 0.2s;

}
@keyframes w80 {
    from { width: 0px; height: 0px; }
    to { width: 8vw; height: 8vw; }
}

.checkmark-circle-2 {
  animation: w56 0.5s ease forwards;
  animation-delay: 0.45s;
  width: 0px;
}
@keyframes w56 {
    from { width: 0px; height: 0px; }
    to { width: 6vw; height: 6vw; }
}

.checkmark {
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: dash 0.5s linear forwards;
  animation-delay: 0.75s;

}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.top-calc {
  top: calc(50vh - 8vw)
}

}

</style>

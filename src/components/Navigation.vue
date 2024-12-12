<script setup>
import Container from "@/components/Container.vue";
import {ref} from "vue";


const languages = ref([
  'Қаз', 'Рус'
])
const lang = ref('Қаз')
const langSelectOpened = ref(false);
</script>

<template>
  <div class="relative">
    <div
        class="w-full select-none fixed top-0 z-[1000] shadow-[0_0_1.5rem_.5rem_rgba(0,0,0,.1)]">
      <Container>
        <div
            class="sm:h-32 h-20 flex justify-between items-center text-[14px] md:text-[16px]">
          <a class="block h-[70%]" href="https://gov4c.kz/ru/" target="_blank">
            <img alt="" class="object-cover h-full" src="@/assets/images/egov-logo.png">
          </a>
          <div class="relative">
            <div
                class="flex gap-6 rounded-lg ring-1 ring-black/20 p-3 focus:ring-2 cursor-pointer hover:bg-neutral-100 transition-all"
                @click="langSelectOpened = !langSelectOpened">
              <span>{{ lang }}</span>
              <i class="bi bi-chevron-down"></i>
            </div>
            <div v-if="langSelectOpened" class="absolute top-[calc(100%+.5rem)] w-full">
              <div v-for="language in languages" class="p-3 cursor-pointer hover:bg-neutral-100 bg-white w-full border-x-black/20 border-x
              first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b transition-all"
                   @click="_ => {
                     lang = language
                     langSelectOpened = false
                   }">{{
                  language
                }}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<style scoped>

</style>
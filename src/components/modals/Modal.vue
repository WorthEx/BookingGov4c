<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false
  }
})

defineEmits(['closeModal'])
</script>

<template>
  <div
      class="fixed inset-0 z-[1000] size-full bg-black/50 backdrop-blur-[.5rem] sm:py-20 py-4"
      @click.stop.prevent="$emit('closeModal')"
      @drag.prevent.stop>
    <div class="absolute -translate-x-1/2 left-1/2
    bg-black rounded-[1rem] flex flex-col *:w-full select-none w-[calc(100%-1.5rem)] md:w-[40rem]
    overflow-y-auto max-h-[calc(100vh-2rem)] no-scrollbar"
         @click.stop.prevent>
      <div :class="props.title ? 'justify-between sm:py-[1.5rem] py-[1rem]' : 'justify-end sm:py-[1rem] py-[1rem]'"
           class="flex sm:gap-4 gap-2 items-center sm:px-[2rem] px-[1rem]">
        <span v-if="props.title" class="font-bold text-lg leading-none text-white">
          {{ props.title }}</span>
        <i class="bi bi-x text-white sm:text-[1.75rem] text-[1.5rem] leading-none cursor-pointer
        hover:text-white/50 transition-all"
           @click="$emit('closeModal')"/>
      </div>
      <slot/>
    </div>
  </div>
</template>
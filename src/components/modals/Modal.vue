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
  <div class="fixed inset-0 z-[1000] size-full bg-black/40 backdrop-blur-[18.9px]" @click="$emit('closeModal')"
       @drag.prevent.stop>
    <div class="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2
    bg-gradient-to-t from-[#252525] to-[#323235] to-[52%] rounded-[1rem]
    flex flex-col *:w-full select-none w-[calc(100%-3rem)] md:w-[40rem] overflow-hidden"
         @click.stop.prevent>
      <div :class="props.title ? 'justify-between sm:py-[1.5rem] py-[1rem]' : 'justify-end sm:py-[1rem] py-[1rem]'"
           class="flex sm:gap-4 gap-2 items-center sm:px-[2rem] px-[1.5rem]">
        <span v-if="props.title" class="sm:text-[1.5rem] text-[1.25rem] font-bold leading-none text-white">
          {{ props.title }}</span>
        <i class="bi bi-x text-white sm:text-[1.75rem] text-[1.5rem] leading-none cursor-pointer
        hover:animate-pulse animate-duration-[1500ms] transition-all"
           @click="$emit('closeModal')"/>
      </div>
      <slot/>
    </div>
  </div>
</template>
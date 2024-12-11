<script setup>
import {useModal} from "@/components/modals/useModal.js";
import {useBookingStore} from "@/stores/booking.js";
import {onMounted} from "vue";

const modal = useModal()
const bookingStore = useBookingStore()

const onCloseChangeDataModal = _ => {
  modal.hideModal()
}

onMounted(_ => {
  console.log(bookingStore.date)
})
</script>

<template>
  <Teleport to="#modal">
    <Transition>
      <component :is="modal.component.value"
                 v-if="modal.show.value"
                 @closeModal="onCloseChangeDataModal"/>
    </Transition>
  </Teleport>
  <div class="min-h-[calc(200vh)]"></div>
  <!--  New branch test -->
</template>

<style scoped>

</style>
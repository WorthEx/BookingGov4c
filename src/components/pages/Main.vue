<script setup>
import {useModal} from "@/components/modals/useModal.js";
import {markRaw} from "vue";
import ChangeDataModal from "@/components/modals/custom/ChangeDataModal.vue";
import Container from "@/components/Container.vue";
import {useBookingStore} from "@/stores/booking.js";

const modal = useModal()
const bookingStore = useBookingStore()

const onCloseChangeDataModal = _ => {
  document.body.style.overflow = "auto"
  modal.hideModal()
}

const onChangeData = (newData) => {
  bookingStore.iin = newData.iin
  bookingStore.fio = newData.fio
  bookingStore.department = newData.department
  bookingStore.date = newData.date
  bookingStore.time = newData.time

  onCloseChangeDataModal()
}

const openChangeDataModal = _ => {
  modal.component.value = markRaw(ChangeDataModal)
  document.body.style.overflow = "hidden"
  modal.showModal()
}

</script>

<template>
  <Teleport to="#modal">
    <Transition>
      <component :is="modal.component.value"
                 v-if="modal.show.value"
                 @changeData="onChangeData"
                 @closeModal="onCloseChangeDataModal"/>
    </Transition>
  </Teleport>
  <div class="min-h-screen sm:py-32 py-20 ">
    <Container>
      <div class="flex flex-col items-center sm:gap-6 gap-4 select-none sm:py-12 py-8">
        <div class="ring-black ring-1 rounded-md p-6 w-full sm:w-fit sm:max-w-[40rem] overflow-hidden
         flex flex-col gap-8">
          <span class="text-center block sm:text-[29px] text-2xl font-medium">Предварительная информация</span>
          <div class="flex flex-col sm:gap-8 gap-6 font-medium">
            <span>ИИН:&nbsp;&nbsp;<span class="font-bold">{{ bookingStore.iin }}</span></span>
            <span>ФИО:&nbsp;&nbsp;<span class="font-bold">{{ bookingStore.fio }}</span></span>
            <span>Отделение:&nbsp;&nbsp;<span class="font-bold">{{ bookingStore.department }}</span></span>
            <span>Дата:&nbsp;&nbsp;<span class="font-bold">{{ bookingStore.date }}</span></span>
            <span>Время:&nbsp;&nbsp;<span class="font-bold">{{ bookingStore.time }}</span></span>
          </div>
        </div>
        <span
            class="font-bold text-[#dc3545] sm:text-xl text-lg sm:text-center">Удостоверьтесь в правильности данных.
          После нажатия кнопки «Подтвердить» бронирование не подлежит отмене.</span>
        <div class="flex sm:flex-row flex-col justify-center sm:gap-12 gap-2 w-full">
          <button
              class="bg-[#dc3545] hover:bg-[#bb2d3b] active:bg-[#b02a37] transition-all
              text-white px-4 py-3 rounded-lg cursor-pointer flex justify-center"
              @click.prevent="openChangeDataModal">
            Отменить
          </button>
          <a
              class="bg-[#198754] hover:bg-[#157347] active:bg-[#146c43] transition-all
              text-white px-4 py-3 rounded-lg flex justify-center" href="https://booking.gov4c.kz/"
              target="_blank">
            Подтвердить
          </a>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped>

</style>
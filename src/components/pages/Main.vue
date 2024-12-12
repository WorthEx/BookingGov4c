<script setup>
import {useModal} from "@/components/modals/useModal.js";
import {markRaw, onMounted, ref} from "vue";
import ChangeDataModal from "@/components/modals/custom/ChangeDataModal.vue";
import Container from "@/components/Container.vue";
import {useBookingStore} from "@/stores/booking.js";

const modal = useModal()
const bookingStore = useBookingStore()

const iin = ref("")
const fio = ref("")
const department = ref("")
const date = ref("")
const time = ref("")

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

  iin.value = newData.iin;
  fio.value = newData.fio;
  department.value = newData.department;
  date.value = newData.date;
  time.value = newData.time;

  onCloseChangeDataModal()
}

const openChangeDataModal = _ => {
  modal.component.value = markRaw(ChangeDataModal)
  document.body.style.overflow = "hidden"
  modal.showModal()
}

onMounted(_ => {
  iin.value = bookingStore.iin;
  fio.value = bookingStore.fio;
  department.value = bookingStore.department;
  date.value = bookingStore.date;
  time.value = bookingStore.time;
})
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
      <div class="flex flex-col items-center gap-6 select-none sm:py-12 py-8">
        <div class="ring-black ring-1 rounded-md p-6 w-full sm:w-fit sm:max-w-[40rem] overflow-hidden
         flex flex-col gap-8">
          <span class="text-center block sm:text-[29px] text-2xl font-medium">Предварительная информация</span>
          <div class="flex flex-col sm:gap-8 gap-6 font-medium">
            <span>ИИН:&nbsp;&nbsp;<span class="font-bold">{{ iin }}</span></span>
            <span>ФИО:&nbsp;&nbsp;<span class="font-bold">{{ fio }}</span></span>
            <span>Отделение:&nbsp;&nbsp;<span class="font-bold">{{ department }}</span></span>
            <span>Дата:&nbsp;&nbsp;<span class="font-bold">{{ date }}</span></span>
            <span>Время:&nbsp;&nbsp;<span class="font-bold">{{ time }}</span></span>
          </div>
        </div>
        <span
            class="font-bold text-[#dc3545] text-xl sm:text-center">Удостоверьтесь в правильности данных.
          После нажатия кнопки «Подтвердить» бронирование не подлежит отмене.</span>
        <div class="flex gap-12">
          <button
              class="bg-[#dc3545] hover:bg-[#bb2d3b] active:bg-[#b02a37] transition-all
              text-white px-4 py-3 rounded-lg cursor-pointer" @click.prevent="openChangeDataModal">
            Отменить
          </button>
          <a
              class="bg-[#198754] hover:bg-[#157347] active:bg-[#146c43] transition-all
              text-white px-4 py-3 rounded-lg" href="https://booking.gov4c.kz/" target="_blank"
          >
            Подтвердить
          </a>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped>

</style>
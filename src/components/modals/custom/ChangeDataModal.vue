<script setup>
import Modal from "@/components/modals/Modal.vue";
import {onMounted, ref} from "vue";
import {useBookingStore} from "@/stores/booking.js";

const emit = defineEmits(['changeData'])

const submitButton = ref()

const departments = [
  'Спец. ЦОН (г. Караганда, Юго-Восточный м-н, р-н Казыбек Би, ул. Муканова, 5)',
  'Спец. ЦОН №1 (г. Караганда, р-н Казыбек Би, ул. Таттимбета, 709)',
  'НАО Гос. корпорация Правительство для граждан (г. Караганда, Юго-Восточный м-н, р-н Казыбек Би, пр. Шахтёров, 5/2)',
  'ЦОН №2 (г. Караганда, Михайловка м-н, р-н Казыбек Би, ул. Чкалова, 7)',
  'ЦОН №4 (г. Караганда, Майкудук м-н, р-н Алихана Бокейхана, ул. Архитектурная, 8)',
  'ЦОН №5 (г. Караганда, 21-й м-н, р-н Алихана Бокейхана, 21-й микрорайон, 6)',
  'ЦОН №5 (г. Караганда, 21-й м-н, р-н Алихана Бокейхана, 21-й микрорайон, 6)',
  'НАО Гос. корпорация Правительство для граждан (г. Сарань, Карагандинская обл., ул. Жамбыла, 85/3)',
  'ЦОН №1 Абайского района (г. Абай, Карагандинская обл., ул. Абая, 54)',
  'ЦОН №1 г. Темиртау (г. Темиртау, Карагандинская обл., Проспект Республики, 128)',
  'ЦОН №2 г. Темиртау (г. Темиртау, Восток м-н, Карагандинская обл., ул. Блюхера, 23)',
]

const bookingStore = useBookingStore()
const departmentOpened = ref(false)
const iin = ref("")
const fio = ref("")
const department = ref(departments[0])
const date = ref("")
const time = ref('00:00')

const dateToString = (date) => {
  return `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`
}

const changeData = () => {
  departmentOpened.value = false
  if (!iin.value || !fio.value || !department.value || !date.value || !time.value) {
    return
  }
  emit('changeData', {
    iin: iin.value,
    fio: fio.value,
    department: department.value,
    date: dateToString(date.value),
    time: time.value,
  })
}

const selectDepartment = (selectedDepartment) => {
  department.value = selectedDepartment
  departmentOpened.value = false
}

const validateIIN = (event) => {
  const value = event.target.value.replace(/\D/g, "");
  iin.value = value.slice(0, 12);
}

document.onkeydown = (e) => {
  if (e.code === "Enter") {
    submitButton.value.blur()
    changeData()
  }
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
  <Modal title="Изменить данные">
    <div
        class="sm:pb-8 pb-6 pt-4 sm:px-[2rem] px-[1rem] flex flex-col sm:gap-[2rem] gap-[1.75rem]">
      <div class="flex flex-col gap-[1rem]">
        <label class="text-white" for="ИИН">ИИН</label>
        <input id="ИИН" v-model.trim="iin" autocomplete="off"
               class="px-4 py-2.5 ring-black ring-[1px] rounded-[.5rem] bg-white
             placeholder:text-[#C3C3C3] outline-none
             transition-all hover:ring-[#AAAAAA]"
               maxlength="12"
               name="ИИН"
               placeholder="010203040506"
               type="text" @input="validateIIN">
      </div>
      <div class="flex flex-col gap-[1rem]">
        <label class="text-white" for="ФИО">ФИО</label>
        <input id="ФИО" v-model.trim="fio" autocomplete="off"
               class="px-4 py-2.5 ring-black ring-[1px] rounded-[.5rem] bg-white
             placeholder:text-[#C3C3C3] outline-none
             transition-all hover:ring-[#AAAAAA]"
               name="ФИО"
               placeholder="Ануаров Ануар Ануарович"
               type="text">
      </div>
      <div class="flex flex-col gap-[1rem]">
        <label class="text-white" for="Отделение">Отделение</label>
        <div class="rounded-[.5rem] cursor-pointer">
          <div :class="departmentOpened ? ' rounded-t-[.5rem]' : 'rounded-[.5rem]'"
               class="px-4 py-2.5 transition-all bg-white hover:bg-white/90 border-b border-black
               flex justify-between gap-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] "
               @click="departmentOpened = !departmentOpened">
            <span>{{ department }}</span>
            <i :class="departmentOpened && 'rotate-180'"
               class="bi bi-chevron-down transition-all ease-out self-center"></i>
          </div>
          <div v-if="departmentOpened"
               class="*:border-b *:border-black max-h-[10rem] overflow-y-auto no-scrollbar">
            <div v-for="department in departments"
                 class="px-4 py-2.5 last:rounded-b-[.5rem] last:border-none bg-white hover:bg-white/90 transition-all"
                 @click="selectDepartment(department)">
              {{ department }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-[1rem]">
        <label class="text-white" for="Дата">Дата</label>
        <input id="Дата" v-model="date" autocomplete="off"
               class="px-4 py-2.5 ring-black ring-[1px] rounded-[.5rem] bg-white
             placeholder:text-[#C3C3C3] outline-none
             transition-all hover:ring-[#AAAAAA]"
               name="Дата"
               type="date">
      </div>
      <div class="flex flex-col gap-[1rem]">
        <label class="text-white" for="Время">Время</label>
        <input id="Время" v-model="time"
               class="px-4 py-2.5 ring-black ring-[1px] rounded-[.5rem] bg-white
             placeholder:text-[#C3C3C3] outline-none
             transition-all hover:ring-[#AAAAAA]"
               name="Время"
               type="time">
      </div>
      <div class="flex sm:flex-row flex-col sm:gap-[2rem] gap-3">
        <button ref="submitButton" class="w-full cursor-pointer bg-white hover:bg-white/90 active:bg-white/80
        text-black rounded-[.5rem] py-3
        transition-all font-medium
        focus:ring-offset-[.25rem] focus:ring-offset-[#252525] focus:ring-2 focus:ring-white"
                @click.prevent.stop="changeData">
          <span class="">Добавить</span>
        </button>
        <button class="w-full cursor-pointer ring-white ring-1 rounded-[.5rem] py-3
        bg-black hover:bg-white/15 active:bg-white/30
        transition-all text-white text-[1rem] font-medium
        focus:ring-bluish"
                @click.prevent.stop="emit('closeModal')">
          <span class="mx-auto">Отмена</span>
        </button>
      </div>
    </div>
  </Modal>
</template>

<style scoped>

</style>
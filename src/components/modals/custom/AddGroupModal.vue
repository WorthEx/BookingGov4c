<script setup>
import Modal from "@/components/modals/Modal.vue";
import {ref} from "vue";
import {toast} from "vue3-toastify";

const emit = defineEmits(['addGroup'])

const addButton = ref()

const groupName = ref("")

const createGroup = () => {
  if (groupName.value === "") {
    toast.warn('Имя группы не может быть пустым.')
    return
  }
  emit('addGroup', groupName.value)
}

document.onkeydown = (e) => {
  if (e.code === "Enter") {
    addButton.value.blur()
    createGroup()
  }
}
</script>

<template>
  <Modal title="Добавить группу">
    <div
        class="sm:pb-[2rem] pb-[1.5rem] pt-[1rem] sm:px-[2rem] px-[1.5rem] flex flex-col sm:gap-[2rem] gap-[1.75rem]">
      <div class="flex flex-col gap-[1rem]">
        <label class="text-[1.125rem] text-white" for="group">Название группы</label>
        <input id="group" v-model.trim="groupName" autocomplete="off"
               class="px-[1rem] py-[.8rem] ring-black ring-[1px] rounded-[.5rem] bg-white
             text-[1rem] placeholder:text-[#C3C3C3] outline-none
             transition-all hover:ring-[#AAAAAA]
             focus:drop-shadow-[0px_3px_6px_rgb(130,143,189,.7)] focus:ring-[#828FBD] focus:ring-2"
               name="group"
               placeholder="ИС-22-4" type="text">
      </div>
      <div class="flex sm:flex-row flex-col sm:gap-[2rem] gap-[.75rem]">
        <button ref="addButton" class="w-full cursor-pointer bg-white hover:bg-white/80 active:scale-[98%]
        text-black rounded-[.5rem] px-[19px] py-[1rem]
              transition-all hover:drop-shadow-[0px_3px_6px_rgb(0,0,0,.3)] leading-none text-[1rem] font-medium
              focus:ring-offset-[.25rem] focus:ring-offset-[#252525] focus:ring-2 focus:ring-white"
                @click.prevent.stop="createGroup">
          <span class="mx-auto">Добавить</span>
        </button>
        <button class="w-full cursor-pointer  ring-white ring-1 rounded-[.5rem] px-[19px] py-[1rem]
        hover:backdrop-brightness-150 active:scale-[98%]
        transition-all hover:drop-shadow-[0px_3px_6px_rgb(0,0,0,.3)] leading-none text-white text-[1rem] font-medium
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
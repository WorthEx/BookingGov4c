import {defineStore} from 'pinia'
import {ref} from "vue";

export const useBookingStore = defineStore('booking', () => {
	const iin = ref("000000000000")
	const fio = ref("Ануаров Ануар Ануарович")
	const department = ref('Спец. ЦОН (г. Караганда, Юго-Восточный м-н, р-н Казыбек Би, ул. Муканова 5)')
	const date = ref((new Date()).toString())
	const time = ref('00:00')

	return {iin, fio, department, date, time}
})

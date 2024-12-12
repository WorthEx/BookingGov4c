import {defineStore} from 'pinia'
import {ref} from "vue";

export const useBookingStore = defineStore('booking', () => {
		const iin = ref("000000000000")
		const fio = ref("Ануаров Ануар Ануарович")
		const department = ref('Спец. ЦОН (г. Караганда, Юго-Восточный м-н, р-н Казыбек Би, ул. Муканова 5)')
		const date = ref('00.00.0000')
		const time = ref('12:40')

		return {iin, fio, department, date, time}
	},
	{
		persist: {
			storage: sessionStorage,
		}
	}
)
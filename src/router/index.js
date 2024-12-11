import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Main',
			component: _ => import('@/components/pages/Main.vue'),
		},
	],
})

export default router

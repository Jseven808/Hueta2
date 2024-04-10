import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Roles',
		component: () => import('./components/Roles.vue'),
	},
	{
		path: '/Role/:id',
		name: 'Role',
		component: () => import('./components/Role.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

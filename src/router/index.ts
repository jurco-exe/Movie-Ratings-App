import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SubjectsView from '../views/SubjectsView.vue';
import SubjectView from '../views/SubjectView.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'subjects',
		component: SubjectsView
	},
	{
		path: '/subject/:name',
		name: 'subject',
		component: SubjectView
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;

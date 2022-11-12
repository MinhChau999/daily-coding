import { createRouter, createWebHistory } from "vue-router";


import CodeDaily from '../components/CodeDaily';
import ErrorPage from '../components/ErrorPage';
import HomeDaily from '../components/HomeDaily';

const routes = [
  {path: '/daily-coding/', component: HomeDaily, name: 'home'},
  {path: '/daily-coding/day:id', component: CodeDaily, name: 'day'},
  {path: '/daily-coding/:pathMatch(.*)*', component: ErrorPage},
]


const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router
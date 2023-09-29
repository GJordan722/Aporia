import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/Components/HomePage.vue'
import AboutPage from '@/Components/AboutPage.vue'


export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {path: '/', name: "home", component: HomePage},
        {path: '/about', component: AboutPage}
    ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/Components/HomePage.vue'
import AboutPage from '@/Components/AboutPage.vue'
import StorePage from '@/Components/StorePage.vue'


export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {path: '/', component: HomePage},
        {path: '/about', component: AboutPage},
        {path: '/store', component: StorePage}
    ],
    scrollBehavior() {
        return {top: 0}
    }
})

export default router
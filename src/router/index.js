import {createRouter, createWebHistory} from 'vue-router'
import AboutView from "@/views/AboutView.vue";
import LandingView from "@/views/LandingView.vue";
import RegistrationView from "@/views/RegistrationView.vue";

const routes = [
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/',
        name: 'landing',
        component: LandingView
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

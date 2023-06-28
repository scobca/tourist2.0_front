import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import LandingView from "@/views/LandingView.vue";
import RegistrationView from "@/views/RegistrationView.vue";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
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

import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import PaymentPage from '../views/PaymentPage.vue'

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/sobre',
        name: 'about-page',
        component: AboutPage
    },
    {
        path: '/planos',
        name: 'payment-page',
        component: PaymentPage
    },
    {
        path: '',
        name: '',
        component: ''
    },
    {
        path: '',
        name: '',
        component: ''
    },
    {
        path: '',
        name: '',
        component: ''
    },
    {
        path: '',
        name: '',
        component: ''
    },
    {
        path: '',
        name: '',
        component: ''
    },
    {
        path: '',
        name: '',
        component: ''
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

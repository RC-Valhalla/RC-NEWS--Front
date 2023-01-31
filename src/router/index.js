import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import PaymentPage from '../views/PaymentPage.vue'
import LoginPage from '../views/LoginPage.vue'
import PostPage from '../views/PostPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/sobre',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/planos',
        name: 'PaymentPage',
        component: PaymentPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/post',
        name: 'PostPage',
        component: PostPage
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

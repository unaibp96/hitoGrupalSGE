import { createRouter, createWebHistory } from 'vue-router'
import InformacionView from '../views/InformacionView.vue'

const routes = [
  {
    path: '/',
    name: 'informacion',
    component: InformacionView
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccesoView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  },
  {
    path: '/consultar',
    name: 'consultar',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConsultarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

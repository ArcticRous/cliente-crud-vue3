import { createRouter, createWebHistory } from 'vue-router'
import ClienteListView from '../views/ClienteListView.vue'
import ClienteCreate from '../views/ClienteCreate.vue'
import ClienteEdit from '../views/ClienteEdit.vue'

const routes = [
  { path: '/', redirect: '/clientes' },
  { path: '/clientes', component: ClienteListView },
  { path: '/clientes/nuevo', component: ClienteCreate },
  { path: '/clientes/editar/:id', component: ClienteEdit, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
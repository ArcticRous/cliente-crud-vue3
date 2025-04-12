<template>
  <cliente-form @submit="crearCliente" />
</template>

<script setup>
import ClienteForm from '../components/ClienteForm.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

function crearCliente(cliente) {
  store.dispatch('agregarCliente', cliente)
  router.push('/clientes')
}
</script>
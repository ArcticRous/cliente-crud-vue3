<template>
  <cliente-form :cliente="cliente" @submit="actualizarCliente" />
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import ClienteForm from '../components/ClienteForm.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

const cliente = computed(() => store.getters.getClienteById(route.params.id))

function actualizarCliente(clienteActualizado) {
  store.dispatch('actualizarCliente', clienteActualizado)
  router.push('/clientes')
}
</script>
<template>
  <v-container>
    <v-btn
  color="#80bc00"
  class="mb-4 text-white"
  @click="$router.push('/clientes/nuevo')"
>
  Nuevo Cliente
</v-btn>
    <v-table class="tabla-estilizada">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cliente in clientes"
          :key="cliente.id"
          :class="{ seleccionado: clienteSeleccionado === cliente.id }"
          @click="clienteSeleccionado = cliente.id"
        >
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.correo }}</td>
          <td>{{ cliente.telefono }}</td>
          <td>
            <v-btn icon @click="$router.push('/clientes/editar/' + cliente.id)">
              <v-icon color="#80bc00">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="confirmarEliminar(cliente.id)">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const clientes = computed(() => store.state.clientes)

const clienteSeleccionado = ref(null)

function confirmarEliminar(id) {
  if (confirm('¿Seguro que deseas eliminar este cliente?')) {
    store.dispatch('eliminarCliente', id)
  }
}
</script>

<style scoped>
.tabla-estilizada {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tabla-estilizada thead {
  background-color: #80bc00;
}

.tabla-estilizada th {
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 12px;
}

.tabla-estilizada td {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.seleccionado {
  background-color: #f1f8e9;
  box-shadow: inset 0 0 10px rgba(128, 188, 0, 0.4);
  transition: all 0.3s ease;
}
</style>
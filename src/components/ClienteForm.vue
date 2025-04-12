<template>
  <v-container>
    <v-form ref="form" @submit.prevent="handleSubmit" v-model="valid">
      <v-text-field
        v-model="localCliente.nombre"
        label="Nombre"
        :rules="[
          v => !!v || 'Campo requerido',
          v => /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(v) || 'Solo letras y espacios'
        ]"
      />

      <v-text-field
        v-model="localCliente.correo"
        label="Correo Electrónico"
        :rules="[
          v => !!v || 'Campo requerido',
          v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Correo inválido'
        ]"
      />

      <v-text-field
        v-model="localCliente.telefono"
        label="Teléfono"
        :rules="[
          v => !!v || 'Campo requerido',
          v => /^\d{1,10}$/.test(v) || 'Solo números, máximo 10 dígitos'
        ]"
      />

      <v-btn type="submit" color="#80bc00" class="mt-3" :disabled="!valid">
        Guardar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const props = defineProps({
  cliente: Object
})
const emit = defineEmits(['submit'])

const localCliente = reactive({
  id: null,
  nombre: '',
  correo: '',
  telefono: ''
})

watch(() => props.cliente, (val) => {
  if (val) Object.assign(localCliente, val)
}, { immediate: true })

const form = ref(null)
const valid = ref(false)

function handleSubmit() {
  if (form.value.validate()) {
    emit('submit', { ...localCliente })
  } else {
    console.warn("Formulario inválido. Revisa los campos.")
  }
}
</script>

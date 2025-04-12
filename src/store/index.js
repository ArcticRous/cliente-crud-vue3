import { createStore } from 'vuex'

export default createStore({
  state: {
    clientes: [],
    nextId: 1
  },
  mutations: {
    agregarCliente(state, cliente) {
      cliente.id = state.nextId++
      state.clientes.push(cliente)
    },
    actualizarCliente(state, clienteActualizado) {
      const index = state.clientes.findIndex(c => c.id === clienteActualizado.id)
      if (index !== -1) state.clientes[index] = clienteActualizado
    },
    eliminarCliente(state, id) {
      state.clientes = state.clientes.filter(c => c.id !== id)
    }
  },
  actions: {
    agregarCliente({ commit }, cliente) {
      commit('agregarCliente', cliente)
    },
    actualizarCliente({ commit }, cliente) {
      commit('actualizarCliente', cliente)
    },
    eliminarCliente({ commit }, id) {
      commit('eliminarCliente', id)
    }
  },
  getters: {
    getClienteById: (state) => (id) => {
      return state.clientes.find(c => c.id === parseInt(id))
    }
  }
})
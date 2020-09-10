// eslint-disable-next-line no-unused-vars
import { ActionTree, MutationTree } from 'vuex'
import { nanoid } from 'nanoid'

// eslint-disable-next-line no-unused-vars
import { rootState, item } from "./types"

const state = {
  items: []
}

const getters = {}

const actions: ActionTree<rootState, any> = {
  addItem({ commit }, item: item) {
    commit('addItem', item)
  },
  deleteItem({ commit }, itemId: string) {
    commit('deleteItem', itemId)
  }
}

const mutations: MutationTree<rootState> = {
  addItem(state, item: item): void {
    if (item.name === '') {
      // Show something went wrong.
      return;
    }
    item.id = nanoid()
    state.items.push(item)
  },
  deleteItem(state, itemId: string): void {
    state.items = state.items.filter((item: item) => item.id !== itemId);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

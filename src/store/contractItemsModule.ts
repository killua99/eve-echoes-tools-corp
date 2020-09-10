// eslint-disable-next-line no-unused-vars
import { ActionTree, MutationTree } from 'vuex'
import { nanoid } from 'nanoid'

// eslint-disable-next-line no-unused-vars
import { rootState, contractItem } from "./types"

const state = {
  contracts: []
}

const getters = {}

const actions: ActionTree<rootState, any> = {
  addContractItem({ commit }, item: contractItem) {
    commit('addContractItem', item)
  },
  deleteContractItem({ commit }, itemId: string) {
    commit('deleteContractItem', itemId)
  }
}

const mutations: MutationTree<rootState> = {
  addContractItem(state, contractItem: contractItem): void {
    if (contractItem.itemId === '') {
      // Show something went wrong.
      return;
    }
    contractItem.id = nanoid()
    state.contractItems.push(contractItem)
  },
  deleteContractItem(state, contractItemId: string): void {
    state.contractItems = state.contractItems.filter((contractItem: contractItem) => contractItem.id !== contractItemId);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

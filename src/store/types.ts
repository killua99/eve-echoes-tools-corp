export interface item {
  id: string
  name: string
  cost: number
}

export interface contractItem {
  id: string
  quantity: number
  itemId: string
  contractId: string
}

export interface contract {
  id: string
  name: string
}

export interface rootState {
  items: item[]
  contractItems: contractItem[]
  contracts: contract[]
}

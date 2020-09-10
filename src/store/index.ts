import { createStore } from 'vuex'

import items from './itemsModule'
import contractItems from './contractItemsModule'

export default createStore({
  modules: {
    items,
    contractItems
  }
})

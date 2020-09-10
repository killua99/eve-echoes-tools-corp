import { createApp, h, markRaw } from 'vue'
import * as page from 'page'

import store from '@/store'
import routes from '@/routes.ts'
import 'normalize.css'

const DefaultComponent = markRaw({
  render: () => h('div', 'Loading…')
})

const SimpleRouterApp = {
  ViewComponent: null,

  data: (): any => ({
    ViewComponent: null
  }),

  render(): any {
    return h(this.ViewComponent || DefaultComponent)
  },

  created (): void {
    for (let route in routes) {
      page(route, () => {
        this.ViewComponent = markRaw(require('@/pages/' + routes[route] + '.vue').default)
      })
    }

    page()
  }
}


const app = createApp(SimpleRouterApp).use(store)

app.use(store)

app.mount('#app')

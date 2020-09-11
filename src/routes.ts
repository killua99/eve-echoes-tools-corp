type Route = {
  [key: string]: string
}

const routes: Route = {
  "/eve-echoes-tools-corp/": 'Home',
  "/eve-echoes-tools-corp/calc": 'ContractCalculator',
  "/eve-echoes-tools-corp/items": 'Items',
  "/eve-echoes-tools-corp/share": 'Share',
  "*": '404'
}

export default routes

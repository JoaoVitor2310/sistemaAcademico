import { Router } from 'express'
import { makeAddServidorController } from '../factories/controllers/add-servidor-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/servidores', adaptRoute(makeAddServidorController()))
}

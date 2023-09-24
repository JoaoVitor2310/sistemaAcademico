import { Router } from 'express'
import { makeAddServidorController } from '../factories/controllers/add-servidor-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeGetServidorController } from '../factories/controllers/get-servidor-controller-factory'

export default (router: Router): void => {
  router.post('/servidores', adaptRoute(makeAddServidorController()))
  router.get('/servidores/:id', adaptRoute(makeGetServidorController()))
}

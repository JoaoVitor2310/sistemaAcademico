import { Router } from 'express'
import { makeAddReitoriaController } from '../factories/controllers/add-reitoria-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeGetReitoriaController } from '../factories/controllers/get-reitoria-controller-factory'

export default (router: Router): void => {
  router.post('/reitorias', adaptRoute(makeAddReitoriaController()))
  router.get('/reitorias/:id', adaptRoute(makeGetReitoriaController()))
}

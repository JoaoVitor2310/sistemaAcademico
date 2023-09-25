import { Router } from 'express'
import { makeAddReitoriaController } from '../factories/controllers/add-reitoria-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/reitorias', adaptRoute(makeAddReitoriaController()))
}

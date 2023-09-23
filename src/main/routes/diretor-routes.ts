import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddDiretorController } from '../factories/controllers/add-diretor-controller-factory'

export default (router: Router): void => {
  router.post('/diretor', adaptRoute(makeAddDiretorController()))
}


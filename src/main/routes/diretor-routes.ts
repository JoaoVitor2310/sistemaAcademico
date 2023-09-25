import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddDiretorController, makeDeleteDiretorController } from '../factories/controllers/add-diretor-controller-factory'

export default (router: Router): void => {
  router.post('/diretor', adaptRoute(makeAddDiretorController()))
  router.delete('/diretor', adaptRoute(makeDeleteDiretorController()))
}


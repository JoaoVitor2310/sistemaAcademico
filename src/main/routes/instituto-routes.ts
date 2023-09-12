
import { Router } from 'express'
import { makeAddInstitutoController } from '../factories/controllers/add-instituto-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/institutos', adaptRoute(makeAddInstitutoController()))
}

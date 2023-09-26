import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddCampusController, makeDeleteCampusController, makeGetCampusController, makeEditCampusController } from '@/main/factories'

export default (router: Router): void => {
  router.post('/campus', adaptRoute(makeAddCampusController()))
  router.get('/campus', adaptRoute(makeGetCampusController()))
  router.put('/campus', adaptRoute(makeEditCampusController()))
  router.delete('/campus', adaptRoute(makeDeleteCampusController()))
}

import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddCampusController, makeGetCampusController } from '@/main/factories'

export default (router: Router): void => {
  router.post('/campus', adaptRoute(makeAddCampusController()))
  router.get('/campus', adaptRoute(makeGetCampusController()))
}

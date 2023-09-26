
import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-route-adapter'
import { makeAddNivelDeEnsinoController, makeGetNivelDeEnsinoController, makeDeleteNivelDeEnsinoController } from '@/main/factories/controllers'

export default (router: Router): void => {
  router.post('/nivelDeEnsinos', adaptRoute(makeAddNivelDeEnsinoController()))
  router.get('/nivelDeEnsino', adaptRoute(makeGetNivelDeEnsinoController()))
  router.delete('/nivelDeEnsino', adaptRoute(makeDeleteNivelDeEnsinoController()))
}

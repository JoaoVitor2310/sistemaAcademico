
import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-route-adapter'
import { makeAddDirecaoDeEnsinoController, makeGetDirecaoDeEnsinoController, makeDeleteDirecaoDeEnsinoController } from '@/main/factories/controllers'

export default (router: Router): void => {
  router.post('/direcaoDeEnsinos', adaptRoute(makeAddDirecaoDeEnsinoController()))
  router.get('/direcaoDeEnsino', adaptRoute(makeGetDirecaoDeEnsinoController()))
  router.delete('/direcaoDeEnsino', adaptRoute(makeDeleteDirecaoDeEnsinoController()))
}


import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-route-adapter'
import { makeAddDiretorDeEnsinoController, makeGetDiretorDeEnsinoController, makeDeleteDiretorDeEnsinoController } from '@/main/factories/controllers'

export default (router: Router): void => {
  router.post('/diretorDeEnsinos', adaptRoute(makeAddDiretorDeEnsinoController()))
  router.get('/diretorDeEnsino', adaptRoute(makeGetDiretorDeEnsinoController()))
  router.delete('/diretorDeEnsino', adaptRoute(makeDeleteDiretorDeEnsinoController()))
}

import { GetDirecaoDeEnsinoController } from '@/presentation/controllers/direcao-de-ensino/get-direcao-de-ensino-controller'
import { makeGetDirecaoDeEnsinoValidation } from '@/main/factories/controllers/direcao-de-ensino/get-direcao-de-ensino-validation-factory'
import { makeDbGetDirecaoDeEnsino } from '@/main/factories/usecases/direcao-de-ensino/get-direcao-de-ensino-factory'

export const makeGetDirecaoDeEnsinoController = (): GetDirecaoDeEnsinoController => {
  const getDirecaoDeEnsinoController = new GetDirecaoDeEnsinoController(
    makeGetDirecaoDeEnsinoValidation(),
    makeDbGetDirecaoDeEnsino()
  )
  return getDirecaoDeEnsinoController
}

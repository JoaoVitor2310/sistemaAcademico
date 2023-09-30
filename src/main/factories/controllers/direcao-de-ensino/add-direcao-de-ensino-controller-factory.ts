import { AddDirecaoDeEnsinoController } from '@/presentation/controllers/direcao-de-ensino/add-direcao-de-ensino-controller'
import { makeAddDirecaoDeEnsinoValidation } from './add-direcao-de-ensino-validation-factory'
import { makeDbAddDirecaoDeEnsino } from '../../usecases/direcao-de-ensino/add-direcao-de-ensino-factory'

export const makeAddDirecaoDeEnsinoController = (): AddDirecaoDeEnsinoController => {
  const addDirecaoDeEnsinoController = new AddDirecaoDeEnsinoController(makeAddDirecaoDeEnsinoValidation(),makeDbAddDirecaoDeEnsino())

  return addDirecaoDeEnsinoController
}

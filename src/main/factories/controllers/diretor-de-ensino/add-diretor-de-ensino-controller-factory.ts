import { AddDiretorDeEnsinoController } from '@/presentation/controllers/diretor-de-ensino/add-diretor-de-ensino-controller'
import { makeAddDiretorDeEnsinoValidation } from './add-diretor-de-ensino-validation-factory'
import { makeDbAddDiretorDeEnsino } from '../../usecases/diretor-de-ensino/add-diretor-de-ensino-factory'

export const makeAddDiretorDeEnsinoController = (): AddDiretorDeEnsinoController => {
  const addDiretorDeEnsinoController = new AddDiretorDeEnsinoController(makeAddDiretorDeEnsinoValidation(),makeDbAddDiretorDeEnsino())

  return addDiretorDeEnsinoController
}

import { AddNivelDeEnsinoController } from '@/presentation/controllers/nivel-de-ensino/add-nivel-de-ensino-controller'
import { makeAddNivelDeEnsinoValidation } from './add-nivel-de-ensino-validation-factory'
import { makeDbAddNivelDeEnsino } from '../../usecases/nivel-de-ensino/add-nivel-de-ensino-factory'

export const makeAddNivelDeEnsinoController = (): AddNivelDeEnsinoController => {
  const addNivelDeEnsinoController = new AddNivelDeEnsinoController(makeAddNivelDeEnsinoValidation(),makeDbAddNivelDeEnsino())

  return addNivelDeEnsinoController
}

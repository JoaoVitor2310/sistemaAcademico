import { AddInstitutoController } from '@/presentation/controllers'
import { makeAddInstitutoValidation } from './add-instituto-validation-factory'
import { makeDbAddInstituto } from '../usecases/add-instituto-factory'

export const makeAddInstitutoController = (): AddInstitutoController => {
  const addInstitutoController = new AddInstitutoController(makeAddInstitutoValidation(),makeDbAddInstituto())

  return addInstitutoController
}

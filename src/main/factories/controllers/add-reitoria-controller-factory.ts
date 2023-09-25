import { AddReitoriaController } from '@/presentation/controllers'
import { makeAddReitoriaValidation } from './add-reitoria-validation-factory'
import { makeDbAddReitoria } from '../usecases/add-reitoria-factory'

export const makeAddReitoriaController = (): AddReitoriaController => {
  const addReitoriaController = new AddReitoriaController(
    makeAddReitoriaValidation(),
    makeDbAddReitoria()
  )

  return addReitoriaController
}

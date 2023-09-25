import { GetReitoriaController } from '@/presentation/controllers'
import { makeGetReitoriaValidation } from './get-reitoria-validation-factory'
import { makeDbGetReitoria } from '../usecases/get-reitoria-factory'

export const makeGetReitoriaController = (): GetReitoriaController => {
  const getReitoriaController = new GetReitoriaController(
    makeGetReitoriaValidation(),
    makeDbGetReitoria()
  )

  return getReitoriaController
}

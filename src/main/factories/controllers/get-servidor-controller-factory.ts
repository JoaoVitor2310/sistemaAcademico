import { GetServidorController } from '@/presentation/controllers'
import { makeGetServidorValidation } from './get-servidor-validation-factory'
import { makeDbGetServidor } from '../usecases/get-servidor-factory'

export const makeGetServidorController = (): GetServidorController => {
  const getServidorController = new GetServidorController(
    makeGetServidorValidation(),
    makeDbGetServidor()
  )

  return getServidorController
}

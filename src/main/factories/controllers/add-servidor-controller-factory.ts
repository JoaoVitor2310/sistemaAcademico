import { AddServidorController } from '@/presentation/controllers'
import { makeAddServidorValidation } from './add-servidor-validation-factory'
import { makeDbAddServidor } from '../usecases/add-servidor-factory'

export const makeAddServidorController = (): AddServidorController => {
  const addServidorController = new AddServidorController(
    makeAddServidorValidation(),
    makeDbAddServidor()
  )

  return addServidorController
}

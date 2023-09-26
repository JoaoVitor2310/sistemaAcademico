
import { AddDiretorController } from '@/presentation/controllers'
import { makeAddDiretorValidation } from './add-diretor-validation-factory'
import { makeDbAddDiretor } from '../usecases/add-diretor-factory'

export const makeAddDiretorController = (): AddDiretorController => {
  const addDiretorController = new AddDiretorController(
    makeAddDiretorValidation(),
    makeDbAddDiretor()
  )
  return addDiretorController
}

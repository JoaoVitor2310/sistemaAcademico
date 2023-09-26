import { DeleteDiretorController } from '@/presentation/controllers'
import { makeDeleteDiretorValidation } from '@/main/factories/controllers'
import { makeDbDeleteDiretor } from '@/main/factories/usecases'

export const makeDeleteDiretorController = (): DeleteDiretorController => {
  const deleteDiretorController = new DeleteDiretorController(
    makeDeleteDiretorValidation(),
    makeDbDeleteDiretor()
  )
  return deleteDiretorController
}

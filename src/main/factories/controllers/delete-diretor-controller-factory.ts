import { DeletediretorController } from '@/presentation/controllers'
import { makeDeletediretorValidation } from '@/main/factories/controllers'
import { makeDbDeletediretor } from '@/main/factories/usecases'

export const makeDeletediretorController = (): DeletediretorController => {
  const deletediretorController = new DeletediretorController(
    makeDeletediretorValidation(),
    makeDbDeletediretor()
  )
  return deletediretorController
}

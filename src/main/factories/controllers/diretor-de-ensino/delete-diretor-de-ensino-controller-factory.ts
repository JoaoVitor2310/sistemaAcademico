import { DeleteDiretorDeEnsinoController } from '@/presentation/controllers/diretor-de-ensino/delete-diretor-de-ensino-controller'
import { makeDeleteDiretorDeEnsinoValidation } from '@/main/factories/controllers/diretor-de-ensino/delete-diretor-de-ensino-validation-factory'
import { makeDbDeleteDiretorDeEnsino } from '@/main/factories/usecases/diretor-de-ensino/delete-diretor-de-ensino-factory'

export const makeDeleteDiretorDeEnsinoController = (): DeleteDiretorDeEnsinoController => {
  const deleteDiretorDeEnsinoController = new DeleteDiretorDeEnsinoController(
    makeDeleteDiretorDeEnsinoValidation(),
    makeDbDeleteDiretorDeEnsino()
  )
  return deleteDiretorDeEnsinoController
}

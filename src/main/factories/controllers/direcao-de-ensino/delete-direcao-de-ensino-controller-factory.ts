import { DeleteDirecaoDeEnsinoController } from '@/presentation/controllers/direcao-de-ensino/delete-direcao-de-ensino-controller'
import { makeDeleteDirecaoDeEnsinoValidation } from '@/main/factories/controllers/direcao-de-ensino/delete-direcao-de-ensino-validation-factory'
import { makeDbDeleteDirecaoDeEnsino } from '@/main/factories/usecases/direcao-de-ensino/delete-direcao-de-ensino-factory'

export const makeDeleteDirecaoDeEnsinoController = (): DeleteDirecaoDeEnsinoController => {
  const deleteDirecaoDeEnsinoController = new DeleteDirecaoDeEnsinoController(
    makeDeleteDirecaoDeEnsinoValidation(),
    makeDbDeleteDirecaoDeEnsino()
  )
  return deleteDirecaoDeEnsinoController
}

import { DeleteNivelDeEnsinoController } from '@/presentation/controllers/nivel-de-ensino/delete-nivel-de-ensino-controller'
import { makeDeleteNivelDeEnsinoValidation } from '@/main/factories/controllers/nivel-de-ensino/delete-nivel-de-ensino-validation-factory'
import { makeDbDeleteNivelDeEnsino } from '@/main/factories/usecases/nivel-de-ensino/delete-nivel-de-ensino-factory'

export const makeDeleteNivelDeEnsinoController = (): DeleteNivelDeEnsinoController => {
  const deleteNivelDeEnsinoController = new DeleteNivelDeEnsinoController(
    makeDeleteNivelDeEnsinoValidation(),
    makeDbDeleteNivelDeEnsino()
  )
  return deleteNivelDeEnsinoController
}

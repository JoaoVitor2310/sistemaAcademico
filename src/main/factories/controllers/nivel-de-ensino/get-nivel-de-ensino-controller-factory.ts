import { GetNivelDeEnsinoController } from '@/presentation/controllers/nivel-de-ensino/get-nivel-de-ensino-controller'
import { makeGetNivelDeEnsinoValidation } from '@/main/factories/controllers/nivel-de-ensino/get-nivel-de-ensino-validation-factory'
import { makeDbGetNivelDeEnsino } from '@/main/factories/usecases/nivel-de-ensino/get-nivel-de-ensino-factory'

export const makeGetNivelDeEnsinoController = (): GetNivelDeEnsinoController => {
  const getNivelDeEnsinoController = new GetNivelDeEnsinoController(
    makeGetNivelDeEnsinoValidation(),
    makeDbGetNivelDeEnsino()
  )
  return getNivelDeEnsinoController
}

import { GetDiretorDeEnsinoController } from '@/presentation/controllers/diretor-de-ensino/get-diretor-de-ensino-controller'
import { makeGetDiretorDeEnsinoValidation } from '@/main/factories/controllers/diretor-de-ensino/get-diretor-de-ensino-validation-factory'
import { makeDbGetDiretorDeEnsino } from '@/main/factories/usecases/diretor-de-ensino/get-diretor-de-ensino-factory'

export const makeGetDiretorDeEnsinoController = (): GetDiretorDeEnsinoController => {
  const getDiretorDeEnsinoController = new GetDiretorDeEnsinoController(
    makeGetDiretorDeEnsinoValidation(),
    makeDbGetDiretorDeEnsino()
  )
  return getDiretorDeEnsinoController
}

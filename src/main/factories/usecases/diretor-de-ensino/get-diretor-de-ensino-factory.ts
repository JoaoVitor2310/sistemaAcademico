import { DbGetDiretorDeEnsino } from '@/data/usercases/diretor-de-ensino/db-get-diretor-de-ensino'
import { GetDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'
import { DiretorDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbGetDiretorDeEnsino = (): GetDiretorDeEnsino => {
  const diretorDeEnsinoMongoRepository = new DiretorDeEnsinoMongoRepository()
  return new DbGetDiretorDeEnsino(diretorDeEnsinoMongoRepository)
}

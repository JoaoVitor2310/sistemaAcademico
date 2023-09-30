import { DbDeleteDiretorDeEnsino } from '@/data/usercases/diretor-de-ensino/db-delete-diretor-de-ensino'
import { DeleteDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino/'
import { DiretorDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbDeleteDiretorDeEnsino = (): DeleteDiretorDeEnsino => {
  const diretorDeEnsinoMongoRepository = new DiretorDeEnsinoMongoRepository()
  return new DbDeleteDiretorDeEnsino(diretorDeEnsinoMongoRepository)
}

import { DbAddDiretorDeEnsino } from '@/data/usercases/diretor-de-ensino'
import { AddDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'
import { DiretorDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbAddDiretorDeEnsino = (): AddDiretorDeEnsino => {
  const diretorDeEnsinoMongoRepository = new DiretorDeEnsinoMongoRepository()
  return new DbAddDiretorDeEnsino(diretorDeEnsinoMongoRepository)
}

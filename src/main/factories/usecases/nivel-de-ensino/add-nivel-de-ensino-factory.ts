import { DbAddNivelDeEnsino } from '@/data/usercases/nivel-de-ensino'
import { AddNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'
import { NivelDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbAddNivelDeEnsino = (): AddNivelDeEnsino => {
  const nivelDeEnsinoMongoRepository = new NivelDeEnsinoMongoRepository()
  return new DbAddNivelDeEnsino(nivelDeEnsinoMongoRepository)
}

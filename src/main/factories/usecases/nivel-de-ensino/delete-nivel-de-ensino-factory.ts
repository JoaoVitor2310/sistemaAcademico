import { DbDeleteNivelDeEnsino } from '@/data/usercases/nivel-de-ensino/db-delete-nivel-de-ensino'
import { DeleteNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino/'
import { NivelDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbDeleteNivelDeEnsino = (): DeleteNivelDeEnsino => {
  const nivelDeEnsinoMongoRepository = new NivelDeEnsinoMongoRepository()
  return new DbDeleteNivelDeEnsino(nivelDeEnsinoMongoRepository)
}

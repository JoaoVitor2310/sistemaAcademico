import { DbGetNivelDeEnsino } from '@/data/usercases/nivel-de-ensino/db-get-nivel-de-ensino'
import { GetNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'
import { NivelDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbGetNivelDeEnsino = (): GetNivelDeEnsino => {
  const nivelDeEnsinoMongoRepository = new NivelDeEnsinoMongoRepository()
  return new DbGetNivelDeEnsino(nivelDeEnsinoMongoRepository)
}

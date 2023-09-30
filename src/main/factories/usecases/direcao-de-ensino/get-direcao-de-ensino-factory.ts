import { DbGetDirecaoDeEnsino } from '@/data/usercases/direcao-de-ensino/db-get-direcao-de-ensino'
import { GetDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'
import { DirecaoDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbGetDirecaoDeEnsino = (): GetDirecaoDeEnsino => {
  const direcaoDeEnsinoMongoRepository = new DirecaoDeEnsinoMongoRepository()
  return new DbGetDirecaoDeEnsino(direcaoDeEnsinoMongoRepository)
}

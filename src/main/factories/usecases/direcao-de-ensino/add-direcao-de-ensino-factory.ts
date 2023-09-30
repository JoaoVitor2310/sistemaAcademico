import { DbAddDirecaoDeEnsino } from '@/data/usercases/direcao-de-ensino'
import { AddDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'
import { DirecaoDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbAddDirecaoDeEnsino = (): AddDirecaoDeEnsino => {
  const direcaoDeEnsinoMongoRepository = new DirecaoDeEnsinoMongoRepository()
  return new DbAddDirecaoDeEnsino(direcaoDeEnsinoMongoRepository)
}

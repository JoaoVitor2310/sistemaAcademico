import { DbDeleteDirecaoDeEnsino } from '@/data/usercases/direcao-de-ensino/db-delete-direcao-de-ensino'
import { DeleteDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino/'
import { DirecaoDeEnsinoMongoRepository } from '@/infra/db'

export const makeDbDeleteDirecaoDeEnsino = (): DeleteDirecaoDeEnsino => {
  const direcaoDeEnsinoMongoRepository = new DirecaoDeEnsinoMongoRepository()
  return new DbDeleteDirecaoDeEnsino(direcaoDeEnsinoMongoRepository)
}

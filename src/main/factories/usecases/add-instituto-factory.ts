import { DbAddInstituto } from '@/data/usercases/instituto'
import { AddInstituto } from '@/domain/usecases/instituto'
import { InstitutoMongoRepository } from '@/infra/db'

export const makeDbAddInstituto = (): AddInstituto => {
  const institutoMongoRepository = new InstitutoMongoRepository()
  return new DbAddInstituto(institutoMongoRepository)
}

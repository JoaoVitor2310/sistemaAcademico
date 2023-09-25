import { DbAddReitoria } from '@/data/usecases/reitoria'
import { AddReitoria } from '@/domain/usecases/reitoria'
import { ReitoriaMongoRepository } from '@/infra/db'

export const makeDbAddReitoria = (): AddReitoria => {
  const reitoriaMongoRepository = new ReitoriaMongoRepository()
  return new DbAddReitoria(reitoriaMongoRepository)
}

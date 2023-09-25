import { DbGetReitoria } from '@/data/usecases/reitoria'
import { GetReitoria } from '@/domain/usecases/reitoria'
import { ReitoriaMongoRepository } from '@/infra/db'

export const makeDbGetReitoria = (): GetReitoria => {
  const reitoriaMongoRepository = new ReitoriaMongoRepository()
  return new DbGetReitoria(reitoriaMongoRepository)
}

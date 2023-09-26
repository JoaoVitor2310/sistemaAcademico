import { DbAddCampus } from '@/data/usercases/campus'
import { AddCampus } from '@/domain/usecases/campus'
import { CampusMongoRepository } from '@/infra/db'

export const makeDbAddCampus = (): AddCampus => {
  const campusMongoRepository = new CampusMongoRepository()
  return new DbAddCampus(campusMongoRepository)
}

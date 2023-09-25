import { DbGetCampus } from '@/data/usercases/campus/db-get-campus'
import { GetCampus } from '@/domain/usecases/campus'
import { CampusMongoRepository } from '@/infra/db'

export const makeDbGetCampus = (): GetCampus => {
  const campusMongoRepository = new CampusMongoRepository()
  return new DbGetCampus(campusMongoRepository)
}

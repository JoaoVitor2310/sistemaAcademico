import { DbDeleteCampus } from '@/data/usercases/campus/db-delete-campus'
import { DeleteCampus } from '@/domain/usecases/campus'
import { CampusMongoRepository } from '@/infra/db'

export const makeDbDeleteCampus = (): DeleteCampus => {
  const campusMongoRepository = new CampusMongoRepository()
  return new DbDeleteCampus(campusMongoRepository)
}

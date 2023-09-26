import { DbEditCampus } from '@/data/usercases/campus/db-edit-campus'
import { EditCampus } from '@/domain/usecases/campus'
import { CampusMongoRepository } from '@/infra/db'

export const makeDbEditCampus = (): EditCampus => {
  const campusMongoRepository = new CampusMongoRepository()
  return new DbEditCampus(campusMongoRepository)
}

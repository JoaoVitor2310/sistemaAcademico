import { EditCampusController } from '@/presentation/controllers'
import { makeEditCampusValidation } from '@/main/factories/controllers'
import { makeDbEditCampus } from '@/main/factories/usecases'

export const makeEditCampusController = (): EditCampusController => {
  const editCampusController = new EditCampusController(
    makeEditCampusValidation(),
    makeDbEditCampus()
  )
  return editCampusController
}

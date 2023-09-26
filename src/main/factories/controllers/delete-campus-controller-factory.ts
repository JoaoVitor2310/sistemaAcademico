import { DeleteCampusController } from '@/presentation/controllers'
import { makeDeleteCampusValidation } from '@/main/factories/controllers'
import { makeDbDeleteCampus } from '@/main/factories/usecases'

export const makeDeleteCampusController = (): DeleteCampusController => {
  const deleteCampusController = new DeleteCampusController(
    makeDeleteCampusValidation(),
    makeDbDeleteCampus()
  )
  return deleteCampusController
}

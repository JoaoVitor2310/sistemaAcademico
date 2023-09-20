import { AddCampusController } from '@/presentation/controllers'
import { makeAddCampusValidation } from '@/main/factories/controllers'
import { makeDbAddCampus } from '@/main/factories/usecases'

export const makeAddCampusController = (): AddCampusController => {
  const addCampusController = new AddCampusController(
    makeAddCampusValidation(),
    makeDbAddCampus()
  )
  return addCampusController
}

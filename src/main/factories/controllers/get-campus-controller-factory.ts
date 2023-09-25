import { GetCampusController } from '@/presentation/controllers'
import { makeGetCampusValidation } from '@/main/factories/controllers'
import { makeDbGetCampus } from '@/main/factories/usecases'

export const makeGetCampusController = (): GetCampusController => {
  const getCampusController = new GetCampusController(
    makeGetCampusValidation(),
    makeDbGetCampus()
  )
  return getCampusController
}

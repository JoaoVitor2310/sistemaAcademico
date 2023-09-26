import { DeleteCampus } from '@/domain/usecases/campus'
import { faker } from '@faker-js/faker'

export const mockDeleteCampusParams = (): DeleteCampus.Params => ({
  id: faker.string.uuid()
})

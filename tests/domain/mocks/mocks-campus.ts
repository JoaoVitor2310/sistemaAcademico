import { EditCampus } from '@/domain/usecases/campus'
import { faker } from '@faker-js/faker'

export const mockEditCampusParams = (): EditCampus.Params => ({
  nome: faker.commerce.department(),
  telefone: faker.string.uuid()
})

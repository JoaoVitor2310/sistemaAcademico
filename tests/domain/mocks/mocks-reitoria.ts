import { AddReitoria } from '@/domain/usecases/reitoria'
import { faker } from '@faker-js/faker'

export const mockReitoriaParams = (): AddReitoria.Params => ({
  id: faker.string.uuid(),
  nome: faker.person.fullName(),
  endereco: faker.location.country(),
  telefone: String(faker.number.int({ min: 10000000000, max: 99999999999 }))
})

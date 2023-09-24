import { AddServidor } from '@/domain/usecases/servidor'
import { faker } from '@faker-js/faker'

export const mockAddServidorParams = (): AddServidor.Params => ({
  id: faker.string.uuid(),
  nome: faker.person.fullName(),
  matricula: String(faker.number.int({ min: 100000000000, max: 999999999999 }))
})

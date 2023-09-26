import { AddNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'
import { faker } from '@faker-js/faker'

export const mockAddNivelDeEnsinoParams = (): AddNivelDeEnsino.Params => ({
  id: faker.string.uuid(),
  nome: faker.person.fullName()
})

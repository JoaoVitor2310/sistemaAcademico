import { AddInstituto } from '@/domain/usecases/instituto'
import { faker } from '@faker-js/faker'

export const mockAddInstitutoParams = (): AddInstituto.Params => ({
  id: faker.string.uuid(),
  razaoSocial: faker.commerce.department(),
  site: faker.internet.url(),
  nomeFantasia: faker.person.fullName(),
  CNPJ: faker.company.buzzNoun(),
  dataFundacao: (faker.date.birthdate).toString()

})

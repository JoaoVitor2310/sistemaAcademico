import { AddDiretor } from '@/domain/usecases/diretor'
import { faker } from '@faker-js/faker'

export const mockAddDiretorParams = (): AddDiretor.Params => ({
  id: faker.string.uuid(),
  servidor: faker.string.uuid(),
  campus: faker.commerce.department(),
  dataInicio: (faker.date.birthdate({ mode: 'year', min: 2000, max: 2015 })).toString(),
  dataFim: (faker.date.birthdate({ mode: 'year', min: 2015, max: 2020 })).toString()
})

export const mockAddDiretorDataInicioAfterDataFim = (): AddDiretor.Params => ({
  id: faker.string.uuid(),
  servidor: faker.string.uuid(),
  campus: faker.commerce.department(),
  dataInicio: (faker.date.birthdate({ mode: 'year', min: 2015, max: 2020 })).toString(),
  dataFim: (faker.date.birthdate({ mode: 'year', min: 2000, max: 2015 })).toString()
})

export const mockAddDiretorInvalidDataInicio = (): AddDiretor.Params => ({
  id: faker.string.uuid(),
  servidor: faker.string.uuid(),
  campus: faker.commerce.department(),
  dataInicio: '',
  dataFim: (faker.date.birthdate({ mode: 'year', min: 2000, max: 2015 })).toString()
})

export const mockAddDiretorInvalidDataFim = (): AddDiretor.Params => ({
  id: faker.string.uuid(),
  servidor: faker.string.uuid(),
  campus: faker.commerce.department(),
  dataInicio: (faker.date.birthdate({ mode: 'year', min: 2015, max: 2020 })).toString(),
  dataFim: ''
})

export const mockAddDiretorInvalidCampus = (): AddDiretor.Params => ({
  id: faker.string.uuid(),
  servidor: faker.string.uuid(),
  campus: '',
  dataInicio: (faker.date.birthdate({ mode: 'year', min: 2000, max: 2015 })).toString(),
  dataFim: (faker.date.birthdate({ mode: 'year', min: 2015, max: 2020 })).toString()
})

export const mockAddDiretorInvalidServidor = (): AddDiretor.Params => ({
  id: faker.string.uuid(),
  servidor: '',
  campus: faker.commerce.department(),
  dataInicio: (faker.date.birthdate({ mode: 'year', min: 2000, max: 2015 })).toString(),
  dataFim: (faker.date.birthdate({ mode: 'year', min: 2015, max: 2020 })).toString()
})

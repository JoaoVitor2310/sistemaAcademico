import { AddDiretorDeEnsino, DeleteDiretorDeEnsino, GetDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'
import { faker } from '@faker-js/faker'

export const mockAddDiretorDeEnsinoParams = (): AddDiretorDeEnsino.Params => ({
  id: faker.string.uuid(),
  dataFim: new Date(2020, 5, 14),
  dataIni: new Date(2021, 5, 14)
})

export const mockGetDiretorDeEnsinoParams = (): GetDiretorDeEnsino.Params => ({
  dataFim: new Date(2020, 5, 14),
  dataIni: new Date(2020, 5, 14)
})

export const mockDeleteDiretorDeEnsinoParams = (): DeleteDiretorDeEnsino.Params => ({
  id: faker.string.uuid(),
  dataFim: new Date(2020, 5, 14),
  dataIni: new Date(2021, 5, 14)
})

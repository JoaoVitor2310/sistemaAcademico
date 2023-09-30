import { AddDirecaoDeEnsino, DeleteDirecaoDeEnsino, GetDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'
import { faker } from '@faker-js/faker'
import { NivelDeEnsino, NivelDeEnsinoData } from '@/domain/model/nivel_de_ensino'

const nivelMockado: NivelDeEnsino = {
  data: {
    nome: 'asd',
    id: '123'
  },
  toJSON: function (): { data: NivelDeEnsinoData } {
    throw new Error('Function not implemented.')
  }
}
export const mockAddDirecaoDeEnsinoParams = (): AddDirecaoDeEnsino.Params => ({
  id: faker.string.uuid(),
  nome: faker.person.fullName(),
  telefone: faker.string.numeric(),
  nivel_ensino: nivelMockado
})

export const mockGetDirecaoDeEnsinoParams = (): GetDirecaoDeEnsino.Params => ({
  nome: faker.person.fullName(),
  telefone: faker.string.numeric(),
  nivel_ensino: nivelMockado
})

export const mockDeleteDirecaoDeEnsinoParams = (): DeleteDirecaoDeEnsino.Params => ({
  id: faker.string.uuid(),
  telefone: faker.string.numeric(),
  nivel_ensino: nivelMockado
})


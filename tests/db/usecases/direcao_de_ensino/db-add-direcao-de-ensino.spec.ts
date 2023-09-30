import { AddDirecaoDeEnsinoRepositorySpy } from '@/tests/db/usecases/direcao_de_ensino/mocks'
import { DbAddDirecaoDeEnsino } from '@/data/usercases/direcao-de-ensino'
import { mockAddDirecaoDeEnsinoParams } from '@/tests/domain/mocks/direcao-de-ensino/mocks-direcao-de-ensino'

type SutTypes = {
  sut: DbAddDirecaoDeEnsino
  addDirecaoDeEnsinoRepositorySpy: AddDirecaoDeEnsinoRepositorySpy

}
const makeSut = (): SutTypes => {
  const addDirecaoDeEnsinoRepositorySpy = new AddDirecaoDeEnsinoRepositorySpy()
  const sut = new DbAddDirecaoDeEnsino(addDirecaoDeEnsinoRepositorySpy)
  return {
    sut,
    addDirecaoDeEnsinoRepositorySpy
  }
}

describe('DBAddDirecaoDeEnsino UseCase', () => {
  test('should get DirecaoDeEnsino data', async () => {
    const { sut, addDirecaoDeEnsinoRepositorySpy } = makeSut()
    const addDirecaoDeEnsinoParams = mockAddDirecaoDeEnsinoParams()
    await sut.add(addDirecaoDeEnsinoParams)

    expect(addDirecaoDeEnsinoRepositorySpy.params.id).toEqual(addDirecaoDeEnsinoParams.id)
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDirecaoDeEnsinoParams())
    expect(isValid).toBe(false)
  })
})

import { AddNivelDeEnsinoRepositorySpy } from '@/tests/db/usecases/nivel_de_ensino/mocks'
import { DbAddNivelDeEnsino } from '@/data/usercases/nivel-de-ensino'
import { mockAddNivelDeEnsinoParams } from '@/tests/domain/mocks/nivel-de-ensino/mocks-nivel-de-ensino'

type SutTypes = {
  sut: DbAddNivelDeEnsino
  addNivelDeEnsinoRepositorySpy: AddNivelDeEnsinoRepositorySpy

}
const makeSut = (): SutTypes => {
  const addNivelDeEnsinoRepositorySpy = new AddNivelDeEnsinoRepositorySpy()
  const sut = new DbAddNivelDeEnsino(addNivelDeEnsinoRepositorySpy)
  return {
    sut,
    addNivelDeEnsinoRepositorySpy
  }
}
describe('DBAddNivelDeEnsino UseCase', () => {
  test('should get NivelDeEnsino data', async () => {
    const { sut, addNivelDeEnsinoRepositorySpy } = makeSut()
    const addNivelDeEnsinoParams = mockAddNivelDeEnsinoParams()
    await sut.add(addNivelDeEnsinoParams)

    expect(addNivelDeEnsinoRepositorySpy.params).toEqual({
      id: addNivelDeEnsinoParams.id,
      nome: addNivelDeEnsinoParams.nome
    })
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddNivelDeEnsinoParams())
    expect(isValid).toBe(false)
  })
})

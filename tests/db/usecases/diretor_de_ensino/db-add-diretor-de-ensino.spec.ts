import { AddDiretorDeEnsinoRepositorySpy } from '@/tests/db/usecases/diretor_de_ensino/mocks'
import { DbAddDiretorDeEnsino } from '@/data/usercases/diretor-de-ensino'
import { mockAddDiretorDeEnsinoParams } from '@/tests/domain/mocks/diretor-de-ensino/mocks-diretor-de-ensino'

type SutTypes = {
  sut: DbAddDiretorDeEnsino
  addDiretorDeEnsinoRepositorySpy: AddDiretorDeEnsinoRepositorySpy

}
const makeSut = (): SutTypes => {
  const addDiretorDeEnsinoRepositorySpy = new AddDiretorDeEnsinoRepositorySpy()
  const sut = new DbAddDiretorDeEnsino(addDiretorDeEnsinoRepositorySpy)
  return {
    sut,
    addDiretorDeEnsinoRepositorySpy
  }
}
describe('DBAddDiretorDeEnsino UseCase', () => {
  test('should get DiretorDeEnsino data', async () => {
    const { sut, addDiretorDeEnsinoRepositorySpy } = makeSut()
    const addDiretorDeEnsinoParams = mockAddDiretorDeEnsinoParams()
    await sut.add(addDiretorDeEnsinoParams)

    expect(addDiretorDeEnsinoRepositorySpy.params).toEqual({
      id: addDiretorDeEnsinoParams.id,
      dataFim: addDiretorDeEnsinoParams.dataFim,
      dataIni: addDiretorDeEnsinoParams.dataIni
    })
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDiretorDeEnsinoParams())
    expect(isValid).toBe(false)
  })
})

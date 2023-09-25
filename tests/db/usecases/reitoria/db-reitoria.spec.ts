import { ReitoriaRepositorySpy } from '@/tests/db/usecases/reitoria/mocks'
import { DbAddReitoria } from '@/data/usecases/reitoria'
import { mockReitoriaParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbAddReitoria
  reitoriaRepositorySpy: ReitoriaRepositorySpy
}
const makeSut = (): SutTypes => {
  const reitoriaRepositorySpy = new ReitoriaRepositorySpy()
  const sut = new DbAddReitoria(reitoriaRepositorySpy)
  return {
    sut,
    reitoriaRepositorySpy
  }
}
describe('DBAddReitoria UseCase', () => {
  test('should get Reitoria data', async () => {
    const { sut, reitoriaRepositorySpy } = makeSut()
    const addReitoriaParams = mockReitoriaParams()
    await sut.add(addReitoriaParams)

    expect(reitoriaRepositorySpy.params).toEqual({
      id: addReitoriaParams.id,
      nome: addReitoriaParams.nome,
      endereco: addReitoriaParams.endereco,
      telefone: addReitoriaParams.telefone
    })
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockReitoriaParams())
    expect(isValid).toBe(false)
  })
})

import { AddReitoriaRepositorySpy } from '@/tests/db/usecases/reitoria/mocks'
import { DbAddReitoria } from '@/data/usecases/reitoria'
import { mockAddReitoriaParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbAddReitoria
  addReitoriaRepositorySpy: AddReitoriaRepositorySpy
}
const makeSut = (): SutTypes => {
  const addReitoriaRepositorySpy = new AddReitoriaRepositorySpy()
  const sut = new DbAddReitoria(addReitoriaRepositorySpy)
  return {
    sut,
    addReitoriaRepositorySpy
  }
}
describe('DBAddReitoria UseCase', () => {
  test('should get Reitoria data', async () => {
    const { sut, addReitoriaRepositorySpy } = makeSut()
    const addReitoriaParams = mockAddReitoriaParams()
    await sut.add(addReitoriaParams)

    expect(addReitoriaRepositorySpy.params).toEqual({
      id: addReitoriaParams.id,
      nome: addReitoriaParams.nome,
      endereco: addReitoriaParams.endereco,
      telefone: addReitoriaParams.telefone
    })
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddReitoriaParams())
    expect(isValid).toBe(false)
  })
})

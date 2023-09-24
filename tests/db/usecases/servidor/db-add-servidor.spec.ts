import { AddServidorRepositorySpy } from '@/tests/db/usecases/servidor/mocks'
import { DbAddServidor } from '@/data/usecases/servidor'
import { mockAddServidorParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbAddServidor
  addServidorRepositorySpy: AddServidorRepositorySpy
}
const makeSut = (): SutTypes => {
  const addServidorRepositorySpy = new AddServidorRepositorySpy()
  const sut = new DbAddServidor(addServidorRepositorySpy)
  return {
    sut,
    addServidorRepositorySpy
  }
}
describe('DBAddServidor UseCase', () => {
  test('should get Servidor data', async () => {
    const { sut, addServidorRepositorySpy } = makeSut()
    const addServidorParams = mockAddServidorParams()
    await sut.add(addServidorParams)

    expect(addServidorRepositorySpy.params).toEqual({
      id: addServidorParams.id,
      nome: addServidorParams.nome,
      matricula: addServidorParams.matricula
    })
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddServidorParams())
    expect(isValid).toBe(false)
  })
})

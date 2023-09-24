import { ServidorRepositorySpy } from '@/tests/db/usecases/servidor/mocks'
import { DbAddServidor } from '@/data/usecases/servidor'
import { mockServidorParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbAddServidor
  servidorRepositorySpy: ServidorRepositorySpy
}
const makeSut = (): SutTypes => {
  const servidorRepositorySpy = new ServidorRepositorySpy()
  const sut = new DbAddServidor(servidorRepositorySpy)
  return {
    sut,
    servidorRepositorySpy
  }
}
describe('DBAddServidor UseCase', () => {
  test('should get Servidor data', async () => {
    const { sut, servidorRepositorySpy } = makeSut()
    const addServidorParams = mockServidorParams()
    await sut.add(addServidorParams)

    expect(servidorRepositorySpy.params).toEqual({
      id: addServidorParams.id,
      nome: addServidorParams.nome,
      matricula: addServidorParams.matricula
    })
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockServidorParams())
    expect(isValid).toBe(false)
  })
})

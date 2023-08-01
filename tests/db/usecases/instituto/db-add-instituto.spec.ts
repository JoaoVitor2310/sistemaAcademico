import { AddInstitutoRepositorySpy } from '@/tests/db/usecases/instituto/mocks'
import { DbAddInstituto } from '@/data/usercases/instituto'
import { mockAddInstitutoParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbAddInstituto
  addInstitutoRepositorySpy: AddInstitutoRepositorySpy

}
const makeSut = (): SutTypes => {
  const addInstitutoRepositorySpy = new AddInstitutoRepositorySpy()
  const sut = new DbAddInstituto(addInstitutoRepositorySpy)
  return {
    sut,
    addInstitutoRepositorySpy
  }
}
describe('DBAddInstituto UseCase', () => {
  test('should get Instituto data', async () => {
    const { sut, addInstitutoRepositorySpy } = makeSut()
    const addInstitutoParams = mockAddInstitutoParams()
    await sut.add(addInstitutoParams)

    expect(addInstitutoRepositorySpy.params).toEqual({
      id: addInstitutoParams.id,
      razaoSocial: addInstitutoParams.razaoSocial,
      site: addInstitutoParams.site,
      nomeFantasia: addInstitutoParams.nomeFantasia,
      CNPJ: addInstitutoParams.CNPJ,
      dataFundacao: addInstitutoParams.dataFundacao

    })
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddInstitutoParams())
    expect(isValid).toBe(true)
  })
})

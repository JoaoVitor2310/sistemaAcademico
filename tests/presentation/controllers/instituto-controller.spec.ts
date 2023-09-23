import { AddInstitutoController } from '@/presentation/controllers'
import { badRequest, noContent } from '@/presentation/helpers'
import { ValidationSpy, AddInstitutoSpy } from '@/tests/presentation/mocks'
// import { throwError } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

const mockRequest = (): AddInstitutoController.Request => ({
  razaoSocial: faker.commerce.department(),
  site: faker.internet.url(),
  nomeFantasia: faker.person.fullName(),
  CNPJ: faker.company.buzzNoun(),
  dataFundacao: (faker.date.birthdate).toString()
})

type SutTypes = {
  sut: AddInstitutoController
  validationSpy: ValidationSpy
  addInstitutoSpy: AddInstitutoSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addInstitutoSpy = new AddInstitutoSpy()
  const sut = new AddInstitutoController(validationSpy, addInstitutoSpy)
  return {
    sut,
    validationSpy,
    addInstitutoSpy
  }
}

describe('Insttuto Controller', () => {
  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})

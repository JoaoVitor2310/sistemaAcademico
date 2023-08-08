import { AddInstitutoController } from '@/presentation/controllers'
// import { badRequest, serverError, noContent } from '@/presentation/helpers'
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
  test('Should return 400 if Validation Na', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })
})

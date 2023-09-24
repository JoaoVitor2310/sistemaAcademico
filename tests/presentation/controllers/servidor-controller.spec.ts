import { AddServidorController } from '@/presentation/controllers'
// import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { ValidationSpy, AddServidorSpy } from '@/tests/presentation/mocks'
// import { throwError } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

const mockRequest = (): AddServidorController.Request => ({
  nome: faker.person.fullName(),
  matricula: String(faker.number.int({ min: 100000000000, max: 999999999999 }))
})

type SutTypes = {
  sut: AddServidorController
  validationSpy: ValidationSpy
  addServidorSpy: AddServidorSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addServidorSpy = new AddServidorSpy()
  const sut = new AddServidorController(validationSpy, addServidorSpy)
  return {
    sut,
    validationSpy,
    addServidorSpy
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

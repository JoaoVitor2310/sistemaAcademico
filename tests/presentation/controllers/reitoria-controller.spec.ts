import { AddReitoriaController } from '@/presentation/controllers'
// import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { ValidationSpy, AddReitoriaSpy } from '@/tests/presentation/mocks'
// import { throwError } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

const mockRequest = (): AddReitoriaController.Request => ({
  nome: faker.person.fullName(),
  endereco: faker.location.country(),
  telefone: String(faker.number.int({ min: 10000000000, max: 99999999999 }))
})

type SutTypes = {
  sut: AddReitoriaController
  validationSpy: ValidationSpy
  addReitoriaSpy: AddReitoriaSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addReitoriaSpy = new AddReitoriaSpy()
  const sut = new AddReitoriaController(validationSpy, addReitoriaSpy)
  return {
    sut,
    validationSpy,
    addReitoriaSpy
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

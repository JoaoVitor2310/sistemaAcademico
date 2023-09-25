import { AddReitoriaController } from '@/presentation/controllers'
import { badRequest, noContent } from '@/presentation/helpers'
import { ValidationSpy, ReitoriaSpy } from '@/tests/presentation/mocks'
// import { throwError } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

const mockRequest = (): AddReitoriaController.Request => ({
  nome: faker.person.fullName(),
  endereco: faker.location.country(),
  telefone: String(faker.number.int({ min: 100000000000, max: 999999999999 }))
})

type SutTypes = {
  sut: AddReitoriaController
  validationSpy: ValidationSpy
  reitoriaSpy: ReitoriaSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const reitoriaSpy = new ReitoriaSpy()
  const sut = new AddReitoriaController(validationSpy, reitoriaSpy)
  return {
    sut,
    validationSpy,
    reitoriaSpy
  }
}

describe('Add Reitoria Controller', () => {
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

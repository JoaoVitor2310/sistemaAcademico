import { GetNivelDeEnsinoController } from '@/presentation/controllers'
import { badRequest, noContent } from '@/presentation/helpers'
import { ValidationSpy, GetNivelDeEnsinoSpy } from '@/tests/presentation/mocks'
import { faker } from '@faker-js/faker'

const mockRequest = (): GetNivelDeEnsinoController.Request => ({
  nome: faker.person.fullName()
})

type SutTypes = {
  sut: GetNivelDeEnsinoController
  validationSpy: ValidationSpy
  getNivelDeEnsinoSpy: GetNivelDeEnsinoSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const getNivelDeEnsinoSpy = new GetNivelDeEnsinoSpy()
  const sut = new GetNivelDeEnsinoController(validationSpy, getNivelDeEnsinoSpy)
  return {
    sut,
    validationSpy,
    getNivelDeEnsinoSpy
  }
}

describe('Nivel de Ensino Controller', () => {
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

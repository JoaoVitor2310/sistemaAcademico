import { GetServidorController } from '@/presentation/controllers'
import { badRequest } from '@/presentation/helpers'
import { ValidationSpy, ServidorSpy } from '@/tests/presentation/mocks'
// import { throwError } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

const mockRequest = (): GetServidorController.Request => ({
  id: faker.string.uuid()
})

type SutTypes = {
  sut: GetServidorController
  validationSpy: ValidationSpy
  servidorSpy: ServidorSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const servidorSpy = new ServidorSpy()
  const sut = new GetServidorController(validationSpy, servidorSpy)
  return {
    sut,
    validationSpy,
    servidorSpy
  }
}

describe('Get Servidor Controller', () => {
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

  test('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const servidor = mockRequest()
    const httpResponse = await sut.handle(servidor)
    expect(httpResponse.statusCode).toBe(200)
  })
})

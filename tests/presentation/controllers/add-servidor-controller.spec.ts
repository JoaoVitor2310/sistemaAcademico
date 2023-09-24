import { AddServidorController } from '@/presentation/controllers'
import { badRequest, noContent } from '@/presentation/helpers'
import { ValidationSpy, ServidorSpy } from '@/tests/presentation/mocks'
// import { throwError } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

const mockRequest = (): AddServidorController.Request => ({
  nome: faker.person.fullName(),
  matricula: String(faker.number.int({ min: 100000000000, max: 999999999999 }))
})

type SutTypes = {
  sut: AddServidorController
  validationSpy: ValidationSpy
  servidorSpy: ServidorSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const servidorSpy = new ServidorSpy()
  const sut = new AddServidorController(validationSpy, servidorSpy)
  return {
    sut,
    validationSpy,
    servidorSpy
  }
}

describe('Add Servidor Controller', () => {
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

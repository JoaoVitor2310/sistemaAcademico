import { DeleteNivelDeEnsinoController } from '@/presentation/controllers'
import { badRequest } from '@/presentation/helpers'
/*
, noContent
*/
import { ValidationSpy, DeleteNivelDeEnsinoSpy } from '@/tests/presentation/mocks'
// import { throwError } from '@/tests/domain/mocks'
import { faker } from '@faker-js/faker'

const mockRequest = (): DeleteNivelDeEnsinoController.Request => ({
  id: faker.string.uuid()
})

type SutTypes = {
  sut: DeleteNivelDeEnsinoController
  validationSpy: ValidationSpy
  deleteNivelDeEnsinoSpy: DeleteNivelDeEnsinoSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const deleteNivelDeEnsinoSpy = new DeleteNivelDeEnsinoSpy()
  const sut = new DeleteNivelDeEnsinoController(validationSpy, deleteNivelDeEnsinoSpy)
  return {
    sut,
    validationSpy,
    deleteNivelDeEnsinoSpy
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

  /*
  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
  */
})

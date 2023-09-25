
import { ValidationSpy } from '@/tests/presentation/mocks'
import { AddDiretorSpy } from '@/tests/presentation/mocks/mock-diretor'
import { AddDiretorController } from '@/presentation/controllers'
import { badRequest, noContent } from '@/presentation/helpers'
import { faker } from '@faker-js/faker'

const mockRequest = {
  servidor: faker.string.uuid(),
  campus: faker.commerce.department(),
  dataInicio: (faker.date.birthdate({ mode: 'year', min: 2000, max: 2015 })).toString(),
  dataFim: (faker.date.birthdate({ mode: 'year', min: 2015, max: 2020 })).toString()
}

const makeSut = () => {
  const validationSpy = new ValidationSpy()
  const addDiretorSpy = new AddDiretorSpy()
  const sut = new AddDiretorController(validationSpy, addDiretorSpy)
  return {
    sut,
    validationSpy,
    addDiretorSpy
  }
}

describe('Diretor Controller', () => {
  test('should call Validation with correct values', async () => {
    const request = mockRequest
    const { sut, validationSpy } = makeSut()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  test('should return 400 if Validation fails', async () => {
    const request = mockRequest
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new Error()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('should return 204 on sucess', async () => {
    const request = mockRequest
    const { sut } = makeSut()
    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(noContent())
  })
})

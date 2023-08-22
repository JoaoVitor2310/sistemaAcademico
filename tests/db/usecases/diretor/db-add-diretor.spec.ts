import { DbAddDiretor } from '@/data/usercases/diretor'
import { AddDiretorRepositorySpy } from '@/tests/db/usecases/diretor/mocks'

import {
  mockAddDiretorDataInicioAfterDataFim,
  mockAddDiretorInvalidCampus,
  mockAddDiretorInvalidDataFim,
  mockAddDiretorInvalidDataInicio,
  mockAddDiretorInvalidServidor,
  mockAddDiretorParams
} from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbAddDiretor
  addDiretorRepositorySpy: AddDiretorRepositorySpy
}

const makeSut = (): SutTypes => {
  const addDiretorRepositorySpy = new AddDiretorRepositorySpy()
  const sut = new DbAddDiretor(addDiretorRepositorySpy)
  return {
    sut,
    addDiretorRepositorySpy
  }
}
describe('DBAddDiretor UseCase', () => {
  // test('should get Diretor data', async () => {
  //   const { sut, addDiretorRepositorySpy } = makeSut()
  //   const addDiretorParams = mockAddDiretorParams()
  //   await sut.add(addDiretorParams)

  //   expect(addDiretorRepositorySpy.params).toEqual({
  //     id: addDiretorParams.id,
  //     servidor: addDiretorParams.servidor,
  //     campus: addDiretorParams.campus,
  //     dataInicio: addDiretorParams.dataInicio,
  //     dataFim: addDiretorParams.dataFim
  //   })
  // })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDiretorParams())
    expect(isValid).toBe(true)
  })

  test('Should return an error if diretor already exists', async () => {})

  test('Should return an error if dataInicio is invalid', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDiretorInvalidDataInicio())
    expect(isValid).toBe(false)
  })

  test('Should return an error if dataFim is invalid', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDiretorInvalidDataFim())
    expect(isValid).toBe(false)
  })

  test('Should return an error if dataInico occurs after dataFim', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDiretorDataInicioAfterDataFim())
    expect(isValid).toBe(false)
  })

  test('Should return an error if campus not found', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDiretorInvalidCampus())
    expect(isValid).toBe(false)
  })

  test('Should return an error if servidor not found', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDiretorInvalidServidor())
    expect(isValid).toBe(false)
  })
})

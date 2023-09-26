import { DbAddDiretor } from '@/data/usercases/diretor'
import { AddDiretorRepositorySpy } from '@/tests/db/usecases/diretor/mocks'

import {
  mockAddDiretorDataInicioAfterDataFim,
  mockAddDiretorInvalidCampus,
  mockAddDiretorInvalidDataFim,
  mockAddDiretorInvalidDataInicio,
  // mockAddDiretorInvalidServidor,
  mockAddDiretorParams
} from '@/tests/domain/mocks'
import { GetCampusRepositorySpy } from './mocks/mock-db-campus'
import { NotFoundError } from '@/presentation/errors'

const makeSut = () => {
  const addDiretorRepositorySpy = new AddDiretorRepositorySpy()
  const getCampusRepositorySpy = new GetCampusRepositorySpy()
  const sut = new DbAddDiretor(addDiretorRepositorySpy, getCampusRepositorySpy)
  return {
    sut,
    addDiretorRepositorySpy
  }
}
describe('DBAddDiretor UseCase', () => {
  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.add(mockAddDiretorParams())
    expect(isValid).toBe(true)
  })

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

  test('Should throw an error if campus not found', async () => {
    const { sut } = makeSut()
    const action = async () => await sut.add(mockAddDiretorInvalidCampus())
    await expect(action).rejects.toThrowError(NotFoundError)
  })

  // test('Should return an error if servidor not found', async () => {
  //   const { sut } = makeSut()
  //   const isValid = await sut.add(mockAddDiretorInvalidServidor())
  //   expect(isValid).toBe(false)
  // })
})

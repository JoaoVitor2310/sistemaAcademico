import { MongoHelper, DiretorDeEnsinoMongoRepository } from '@/infra/db'
import { mockAddDiretorDeEnsinoParams, mockDeleteDiretorDeEnsinoParams, mockGetDiretorDeEnsinoParams } from '@/tests/domain/mocks/diretor-de-ensino/mocks-diretor-de-ensino'

import { Collection } from 'mongodb'

let diretorDeEnsinoCollection: Collection

const makeSut = (): DiretorDeEnsinoMongoRepository => {
  return new DiretorDeEnsinoMongoRepository()
}

describe('DiretorDeEnsinoMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    diretorDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    await diretorDeEnsinoCollection.deleteMany({})
  })
  describe('add()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const addDiretorDeEnsinoParams = mockAddDiretorDeEnsinoParams()
      const isValid = await sut.add(addDiretorDeEnsinoParams)
      expect(isValid).toBe(true)
    })
  })

  describe('get()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()

      const getDiretorDeEnsinoParams = mockGetDiretorDeEnsinoParams()
      const isValid = await sut.get(getDiretorDeEnsinoParams)
      expect(typeof isValid).toBe(typeof getDiretorDeEnsinoParams)
    })
  })

  describe('delete()', () => {
    test('Should delete an account on success', async () => {
      const sut = makeSut()
      const deleteDiretorDeEnsinoParams = mockDeleteDiretorDeEnsinoParams()
      const isValid = await sut.delete(deleteDiretorDeEnsinoParams)
      expect(isValid).toBe(true)
    })
  })
})


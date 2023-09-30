import { MongoHelper, DirecaoDeEnsinoMongoRepository } from '@/infra/db'
import { mockAddDirecaoDeEnsinoParams, mockDeleteDirecaoDeEnsinoParams, mockGetDirecaoDeEnsinoParams } from '@/tests/domain/mocks/direcao-de-ensino/mocks-direcao-de-ensino'

import { Collection } from 'mongodb'

let direcaoDeEnsinoCollection: Collection

const makeSut = (): DirecaoDeEnsinoMongoRepository => {
  return new DirecaoDeEnsinoMongoRepository()
}

describe('DirecaoDeEnsinoMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    direcaoDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    await direcaoDeEnsinoCollection.deleteMany({})
  })
  describe('add()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const addDirecaoDeEnsinoParams = mockAddDirecaoDeEnsinoParams()
      const isValid = await sut.add(addDirecaoDeEnsinoParams)
      expect(isValid).toBe(true)
    })
  })

  describe('get()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const getDirecaoDeEnsinoParams = mockGetDirecaoDeEnsinoParams()
      const isValid = await sut.get(getDirecaoDeEnsinoParams)
      expect(typeof isValid).toBe(typeof getDirecaoDeEnsinoParams)
    })
  })

  describe('delete()', () => {
    test('Should delete an account on success', async () => {
      const sut = makeSut()
      const deleteDirecaoDeEnsinoParams = mockDeleteDirecaoDeEnsinoParams()
      const isValid = await sut.delete(deleteDirecaoDeEnsinoParams)
      expect(isValid).toBe(true)
    })
  })
})


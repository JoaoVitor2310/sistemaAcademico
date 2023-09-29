import { MongoHelper, NivelDeEnsinoMongoRepository } from '@/infra/db'
import { mockAddNivelDeEnsinoParams, mockDeleteNivelDeEnsinoParams, mockGetNivelDeEnsinoParams } from '@/tests/domain/mocks/nivel-de-ensino/mocks-nivel-de-ensino'

import { Collection } from 'mongodb'

let nivelDeEnsinoCollection: Collection

const makeSut = (): NivelDeEnsinoMongoRepository => {
  return new NivelDeEnsinoMongoRepository()
}

describe('NivelDeEnsinoMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    nivelDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    await nivelDeEnsinoCollection.deleteMany({})
  })
  describe('add()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const addNivelDeEnsinoParams = mockAddNivelDeEnsinoParams()
      const isValid = await sut.add(addNivelDeEnsinoParams)
      expect(isValid).toBe(true)
    })
  })

  describe('get()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const getNivelDeEnsinoParams = mockGetNivelDeEnsinoParams()
      const isValid = await sut.get(getNivelDeEnsinoParams)
      expect(typeof isValid).toBe(typeof getNivelDeEnsinoParams)
    })
  })

  describe('delete()', () => {
    test('Should delete an account on success', async () => {
      const sut = makeSut()
      const deleteNivelDeEnsinoParams = mockDeleteNivelDeEnsinoParams()
      const isValid = await sut.delete(deleteNivelDeEnsinoParams)
      expect(isValid).toBe(true)
    })
  })
})


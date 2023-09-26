import { NivelDeEnsinoMongoRepository, MongoHelper } from '@/infra/db'
import { mockAddNivelDeEnsinoParams } from '@/tests/domain/mocks/nivel-de-ensino/mocks-nivel-de-ensino'

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
})


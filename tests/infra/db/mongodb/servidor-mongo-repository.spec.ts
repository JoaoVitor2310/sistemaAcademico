import { ServidorMongoRepository, MongoHelper } from '@/infra/db'
import { mockAddServidorParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

let ServidorCollection: Collection

const makeSut = (): ServidorMongoRepository => {
  return new ServidorMongoRepository()
}

describe('ServidorMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    ServidorCollection = MongoHelper.getCollection('Servidor')
    await ServidorCollection.deleteMany({})
  })
  describe('add()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const addServidorParams = mockAddServidorParams()
      const isValid = await sut.add(addServidorParams)
      expect(isValid).toBe(true)
    })
  })
})


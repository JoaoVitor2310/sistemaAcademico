import { ReitoriaMongoRepository, MongoHelper } from '@/infra/db'
import { mockAddReitoriaParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

let ReitoriaCollection: Collection

const makeSut = (): ReitoriaMongoRepository => {
  return new ReitoriaMongoRepository()
}

describe('ReitoriaMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    ReitoriaCollection = MongoHelper.getCollection('Reitoria')
    await ReitoriaCollection.deleteMany({})
  })
  describe('add()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const addReitoriaParams = mockAddReitoriaParams()
      const isValid = await sut.add(addReitoriaParams)
      expect(isValid).toBe(true)
    })
  })
})


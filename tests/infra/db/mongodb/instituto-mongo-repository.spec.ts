import { InstitutoMongoRepository, MongoHelper } from '@/infra/db'
import { mockAddInstitutoParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

let institutoCollection: Collection

const makeSut = (): InstitutoMongoRepository => {
  return new InstitutoMongoRepository()
}

describe('InstitutoMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    institutoCollection = MongoHelper.getCollection('instituto')
    await institutoCollection.deleteMany({})
  })
  describe('add()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const addInstitutoParams = mockAddInstitutoParams()
      const isValid = await sut.add(addInstitutoParams)
      expect(isValid).toBe(true)
    })
  })
})


import { CampusMongoRepository, MongoHelper } from '@/infra/db'
import { mockDeleteCampusParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

let institutoCollection: Collection

const makeSut = (): CampusMongoRepository => {
  return new CampusMongoRepository()
}

describe.skip('CampusMongoRepository', () => {
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
  describe('delete()', () => {
    test('Should return an account on success', async () => {
      const sut = makeSut()
      const deleteCampusParams = mockDeleteCampusParams()
      const isValid = await sut.delete(deleteCampusParams)
      expect(isValid).toBe(true)
    })
  })
})


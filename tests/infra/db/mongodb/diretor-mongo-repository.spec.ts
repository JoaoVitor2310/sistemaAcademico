import { MongoHelper, DiretorMongoRepository } from '@/infra/db'
import { mockAddDiretorParams } from '@/tests/domain/mocks'

describe('DiretorMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const diretorCollection = MongoHelper.getCollection('diretor')
    await diretorCollection.deleteMany({})
  })

  describe('addDiretor', () => {
    test('should return an account on success', async () => {
      const sut = new DiretorMongoRepository()
      const addDiretorParams = mockAddDiretorParams()
      const isValid = await sut.add(addDiretorParams)
      expect(isValid).toBe(true)
    })
  })
})

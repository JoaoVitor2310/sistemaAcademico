import { ReitoriaMongoRepository, MongoHelper } from '@/infra/db'
import { mockReitoriaParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

let ReitoriaCollection: Collection

const makeSut = (): ReitoriaMongoRepository => {
  return new ReitoriaMongoRepository()
}

describe('ReitoriaMongoRepository', () => {
  const mockReitoria = mockReitoriaParams()

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
    test('Should return a reitoria on success', async () => {
      const sut = makeSut()
      const isValid = await sut.add(mockReitoria)
      expect(isValid).toBe(true)
    })
  })
  describe('get()', () => {
    test('Should return a reitoria on success', async () => {
      const sut = makeSut()
      const reitoria = await sut.get({ id: mockReitoria.id, endereco: mockReitoria.endereco,telefone: mockReitoria.telefone})
      expect(reitoria).toEqual({
        id: mockReitoria.id,
        nome: mockReitoria.nome,
        endereco: mockReitoria.endereco,
        telefone: mockReitoria.telefone
      })
    })
  })
})

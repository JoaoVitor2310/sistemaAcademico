import { ServidorMongoRepository, MongoHelper } from '@/infra/db'
import { mockServidorParams } from '@/tests/domain/mocks'

import { Collection } from 'mongodb'

let ServidorCollection: Collection

const makeSut = (): ServidorMongoRepository => {
  return new ServidorMongoRepository()
}

describe('ServidorMongoRepository', () => {
  const mockServidor = mockServidorParams()

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
    test('Should return a servidor on success', async () => {
      const sut = makeSut()
      const isValid = await sut.add(mockServidor)
      expect(isValid).toBe(true)
    })
  })
  describe('get()', () => {
    test('Should return a servidor on success', async () => {
      const sut = makeSut()
      const servidor = await sut.get({ id: mockServidor.id })
      expect(servidor).toEqual({
        id: mockServidor.id,
        nome: mockServidor.nome,
        matricula: mockServidor.matricula
      })
    })
  })
})

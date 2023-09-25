import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Express } from 'express'
import request from 'supertest'
import { Collection } from 'mongodb'
let reitoriaCollection: Collection

let app: Express

describe('Instituto Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    reitoriaCollection = MongoHelper.getCollection('reitorias')
    await reitoriaCollection.deleteMany({})
  })
  test('Should return 400 if Validation fails', async () => {
    await request(app)
      .get('/api/reitorias')
      .send({
        nome: 'nome'
      })
      .expect(400)
  })

  test('Should return an instituto on sucess', async () => {
    await request(app)
      .get('/api/reitorias')
      .send({
        nome: 'nome',
        endereco: '2',
        telefone: '1'
      })
      .expect(204)
  })
})

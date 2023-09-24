import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Express } from 'express'
import request from 'supertest'
import { Collection } from 'mongodb'
let servidorCollection: Collection

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
    servidorCollection = MongoHelper.getCollection('servidores')
    await servidorCollection.deleteMany({})
  })
  test('Should return 400 if Validation fails', async () => {
    await request(app)
      .get('/api/servidores')
      .send({
        nome: 'nome'
      })
      .expect(400)
  })

  test('Should return an instituto on sucess', async () => {
    await request(app)
      .get('/api/servidores')
      .send({
        nome: 'nome',
        matricula: '1'
      })
      .expect(204)
  })
})

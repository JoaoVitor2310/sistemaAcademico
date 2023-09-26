
import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Express } from 'express'
import request from 'supertest'
import { Collection } from 'mongodb'

let nivelDeEnsinoCollection: Collection

let app: Express

describe('NivelDeEnsino Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    nivelDeEnsinoCollection = MongoHelper.getCollection('nivelDeEnsino')
    await nivelDeEnsinoCollection.deleteMany({})
  })
  test('Should return 400 if Validation fails', async () => {
    await request(app)
      .post('/api/nivelDeEnsino')
      .send({
        nome: 'nome'

      })
      .expect(400)
  })

  test('Should return an nivelDeEnsino on sucess', async () => {
    await request(app)
      .post('/api/nivelDeEnsino')
      .send({
        nome: 'nome'
      })
      .expect(204)
  })
})

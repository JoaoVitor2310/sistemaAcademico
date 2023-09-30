
import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Express } from 'express'
import request from 'supertest'
import { Collection } from 'mongodb'

let direcaoDeEnsinoCollection: Collection

let app: Express

describe('DirecaoDeEnsino Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    direcaoDeEnsinoCollection = MongoHelper.getCollection('direcaoDeEnsino')
    await direcaoDeEnsinoCollection.deleteMany({})
  })
  test('Should return 400 if Validation fails', async () => {
    await request(app)
      .post('/api/direcaoDeEnsino')
      .send({
        nome: 'nome'

      })
      .expect(400)
  })

  test('Should return an direcaoDeEnsino on sucess', async () => {
    await request(app)
      .post('/api/direcaoDeEnsino')
      .send({
        nome: 'nome'
      })
      .expect(204)
  })
})

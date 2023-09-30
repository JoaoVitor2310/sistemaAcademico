
import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Express } from 'express'
import request from 'supertest'
import { Collection } from 'mongodb'

let diretorDeEnsinoCollection: Collection

let app: Express

describe('DiretorDeEnsino Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    diretorDeEnsinoCollection = MongoHelper.getCollection('diretorDeEnsino')
    await diretorDeEnsinoCollection.deleteMany({})
  })
  test('Should return 400 if Validation fails', async () => {
    await request(app)
      .post('/api/diretorDeEnsino')
      .send({
        nome: 'nome'

      })
      .expect(400)
  })

  test('Should return an diretorDeEnsino on sucess', async () => {
    await request(app)
      .post('/api/diretorDeEnsino')
      .send({
        nome: 'nome'
      })
      .expect(204)
  })
})

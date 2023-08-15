
import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'

import { Express } from 'express'
import request from 'supertest'
import { Collection } from 'mongodb'

let institutoCollection: Collection

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
    institutoCollection = MongoHelper.getCollection('instituto')
    await institutoCollection.deleteMany({})
  })
  test('Should return 400 if Validation fails', async () => {
    await request(app)
      .post('/api/institutos')
      .send({
        razaoSocial: 'razaoSocial',
        site: 'site',
        nomeFantasia: 'nomeFantasia'

      })
      .expect(400)
  })

  test('Should return an instituto on sucess', async () => {
    await request(app)
      .post('/api/institutos')
      .send({
        razaoSocial: 'razaoSocial',
        site: 'site',
        nomeFantasia: 'nomeFantasia',
        CNPJ: 'CNPJ',
        dataFundacao: 'dataFundacao'
      })
      .expect(204)
  })
})

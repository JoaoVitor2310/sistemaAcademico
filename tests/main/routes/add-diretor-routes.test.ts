import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'
import { Express } from 'express'
import request from 'supertest'

let app: Express

describe('Diretor Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const diretorCollection = MongoHelper.getCollection('instituto')
    await diretorCollection.deleteMany({})
  })

  test('Should return add a diretor on sucess', async () => {
    await request(app).post('/api/diretor').send({
      servidor: 'servidor',
      campus: 'campus',
      dataInicio: 'dataInicio',
      dataFim: 'dataInicio'
    }).expect(204)
  })

  test('Should return 400 if Validation fails', async () => {
    await request(app).post('/api/diretor').send({
      campus: 'campus',
      dataInicio: 'dataInicio',
      dataFim: 'dataInicio'
    }).expect(400)
  })
})

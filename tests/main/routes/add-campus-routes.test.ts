import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'
import { Express } from 'express'
import request from 'supertest'

let app: Express

describe('Campus Routes', () => {
  beforeAll(async () => {
    app = await setupApp()
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const campusCollection = MongoHelper.getCollection('campus')
    await campusCollection.deleteMany({})
  })

  test('Should return add a campus on sucess', async () => {
    await request(app).post('/api/campus').send({
      nome: 'nome',
      endereco: 'endereco',
      telefone: 'telefone'
    }).expect(204)
  })
})

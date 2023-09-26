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

  test('Should return a campus on sucess', async () => {
    await request(app).post('/api/campus').send({
      nome: 'campus123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    const resp2 = await request(app).put('/api/campus').send({
      nome: 'campus123',
      endereco: 'test123'
    })
    expect(resp2.status).toBe(200)
  })

  test('Should return 400 if validation fails', async () => {
    await request(app).post('/api/campus').send({
      endereco: 'endereco',
      telefone: 'telefone'
    })

    await request(app).put('/api/campus').send({
      endereco: ''
    }).expect(400)
  })

  test('Should return 404 if campus not found', async () => {
    await request(app).post('/api/campus').send({
      nome: 'campus123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    const resp2 = await request(app).put('/api/campus').send({
      nome: 'campus1245678'
    })
    expect(resp2.status).toBe(404)
  })
})

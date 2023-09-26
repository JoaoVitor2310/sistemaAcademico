import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'
import { Express } from 'express'
import request from 'supertest'

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
    const nivelDeEnsinoCollection = MongoHelper.getCollection('nivelDeEnsino')
    await nivelDeEnsinoCollection.deleteMany({})
  })

  test('Should return a nivelDeEnsino on sucess', async () => {
    await request(app).post('/api/nivelDeEnsino').send({
      nome: 'nivelDeEnsino123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    const resp2 = await request(app).get('/api/nivelDeEnsino').send({
      nome: 'nivelDeEnsino123'
    })
    expect(resp2.body.id).toBeDefined()
    expect(resp2.body).toEqual({
      id: resp2.body.id,
      nome: 'nivelDeEnsino123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    expect(resp2.status).toBe(200)
  })

  test('Should return 400 if validation fails', async () => {
    await request(app).post('/api/nivelDeEnsino').send({
      nome: 'nivelDeEnsino123',
      endereco: 'endereco',
      telefone: 'telefone'
    })

    await request(app).get('/api/nivelDeEnsino').send({
      endereco: ''
    }).expect(400)
  })

  test('Should return 404 if nivelDeEnsino not found', async () => {
    await request(app).post('/api/nivelDeEnsino').send({
      nome: 'nivelDeEnsino123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    const resp2 = await request(app).get('/api/nivelDeEnsino').send({
      nome: 'nivelDeEnsino12'
    })
    expect(resp2.status).toBe(404)
  })
})

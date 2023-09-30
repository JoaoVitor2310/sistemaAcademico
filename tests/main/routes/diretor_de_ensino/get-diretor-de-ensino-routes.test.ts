import { MongoHelper } from '@/infra/db'
import { setupApp } from '@/main/config/app'
import { Express } from 'express'
import request from 'supertest'

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
    const diretorDeEnsinoCollection = MongoHelper.getCollection('diretorDeEnsino')
    await diretorDeEnsinoCollection.deleteMany({})
  })

  test('Should return a diretorDeEnsino on sucess', async () => {
    await request(app).post('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    const resp2 = await request(app).get('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123'
    })
    expect(resp2.body.id).toBeDefined()
    expect(resp2.body).toEqual({
      id: resp2.body.id,
      nome: 'diretorDeEnsino123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    expect(resp2.status).toBe(200)
  })

  test('Should return 400 if validation fails', async () => {
    await request(app).post('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123',
      endereco: 'endereco',
      telefone: 'telefone'
    })

    await request(app).get('/api/diretorDeEnsino').send({
      endereco: ''
    }).expect(400)
  })

  test('Should return 404 if diretorDeEnsino not found', async () => {
    await request(app).post('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    const resp2 = await request(app).get('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino12'
    })
    expect(resp2.status).toBe(404)
  })
})

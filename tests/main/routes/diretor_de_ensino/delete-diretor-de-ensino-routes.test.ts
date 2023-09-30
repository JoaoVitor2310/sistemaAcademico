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

  test('Should delete a diretorDeEnsino on sucess', async () => {
    await request(app).post('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123'
    })
    const resp1 = await request(app).get('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123'
    })
    const resp2 = await request(app).delete('/api/diretorDeEnsino').send({
      id: resp1.body.id
    })
    expect(resp2.body.id).toBeDefined()
    expect(resp2.body).toEqual({
      id: resp2.body.id,
      nome: 'diretorDeEnsino123'
    })
    expect(resp2.status).toBe(200)
  })

  test('Should return 400 if validation fails', async () => {
    await request(app).post('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123'
    })
    await request(app).get('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123'
    })

    await request(app).delete('/api/diretorDeEnsino').send({
      id: ''
    }).expect(400)
  })

  test('Should return 404 if diretorDeEnsino not found', async () => {
    await request(app).post('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123'
    })
    await request(app).get('/api/diretorDeEnsino').send({
      nome: 'diretorDeEnsino123'
    })
    const resp2 = await request(app).delete('/api/diretorDeEnsino').send({
      id: 'idInexistente'
    })
    expect(resp2.status).toBe(404)
  })
})

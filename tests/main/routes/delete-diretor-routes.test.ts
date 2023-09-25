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
    const diretorCollection = MongoHelper.getCollection('diretor')
    await diretorCollection.deleteMany({})
  })

  test('Should delete a diretor on sucess', async () => {
    await request(app).post('/api/diretor').send({
      nome: 'diretor123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    const resp1 = await request(app).get('/api/diretor').send({
      nome: 'diretor123'
    })
    const resp2 = await request(app).delete('/api/diretor').send({
      id: resp1.body.id
    })
    expect(resp2.body.id).toBeDefined()
    expect(resp2.body).toEqual({
      id: resp2.body.id,
      nome: 'diretor123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    expect(resp2.status).toBe(200)
  })

  test('Should return 400 if validation fails', async () => {
    await request(app).post('/api/diretor').send({
      nome: 'diretor123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    await request(app).get('/api/diretor').send({
      nome: 'diretor123'
    })

    await request(app).delete('/api/diretor').send({
      id: ''
    }).expect(400)
  })

  test('Should return 404 if diretor not found', async () => {
    await request(app).post('/api/diretor').send({
      nome: 'diretor123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    await request(app).get('/api/diretor').send({
      nome: 'diretor123'
    })
    const resp2 = await request(app).delete('/api/diretor').send({
      id: 'idInexistente'
    })
    expect(resp2.status).toBe(404)
  })
})

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

  test('Should delete a campus on sucess', async () => {
    await request(app).post('/api/campus').send({
      nome: 'campus123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    const resp1 = await request(app).get('/api/campus').send({
      nome: 'campus123'
    })
    const resp2 = await request(app).delete('/api/campus').send({
      id: resp1.body.id
    })
    expect(resp2.body.id).toBeDefined()
    expect(resp2.body).toEqual({
      id: resp2.body.id,
      nome: 'campus123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    expect(resp2.status).toBe(200)
  })

  test('Should return 400 if validation fails', async () => {
    await request(app).post('/api/campus').send({
      nome: 'campus123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    await request(app).get('/api/campus').send({
      nome: 'campus123'
    })

    await request(app).delete('/api/campus').send({
      id: ''
    }).expect(400)
  })

  test('Should return 404 if campus not found', async () => {
    await request(app).post('/api/campus').send({
      nome: 'campus123',
      endereco: 'endereco',
      telefone: 'telefone'
    })
    await request(app).get('/api/campus').send({
      nome: 'campus123'
    })
    const resp2 = await request(app).delete('/api/campus').send({
      id: 'idInexistente'
    })
    expect(resp2.status).toBe(404)
  })
})

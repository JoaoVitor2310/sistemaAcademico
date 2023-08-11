import { setupApp } from '@/main/config/app'

import { Express } from 'express'
import request from 'supertest'
let app: Express

describe('Instituto Routes', () => {
  beforeAll(async () => {
    app = setupApp()
  })

  test('Should return an instituto on sucess', async () => {
    await request(app).post('/api/institutos').expect(200)
  })
})

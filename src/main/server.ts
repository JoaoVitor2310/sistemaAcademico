import 'module-alias/register'
import { MongoHelper } from '@/infra/db'

import dotenv from 'dotenv'
dotenv.config()

MongoHelper.connect(process.env.MONGO_URL)
  .then(async () => {
    const { setupApp } = await import('./config/app')
    const app = await setupApp()
    app.listen(process.env.PORT, () => { console.log(`Server running at http://localhost:${process.env.PORT}`) })
  })
  .catch(console.error)

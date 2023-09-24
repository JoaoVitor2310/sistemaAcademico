import { MongoHelper } from '@/infra/db'
import { AddServidorRepository } from '@/data/db/servidor'
import { AddServidor } from '@/domain/usecases/servidor'

export class ServidorMongoRepository implements AddServidorRepository {
  async add (data: AddServidor.Params): Promise<AddServidor.Result> {
    const ServidorCollection = MongoHelper.getCollection('servidores')
    const result = await ServidorCollection.insertOne(data)
    return result.insertedId !== null
  }
}

import { MongoHelper } from '@/infra/db'
import { AddReitoriaRepository } from '@/data/db/reitoria'
import { AddReitoria } from '@/domain/usecases/reitoria'

export class ReitoriaMongoRepository implements AddReitoriaRepository {
  async add (data: AddReitoria.Params): Promise<AddReitoria.Result> {
    const reitoriaCollection = MongoHelper.getCollection('reitorias')
    const result = await reitoriaCollection.insertOne(data)
    return result.insertedId !== null
  }
}

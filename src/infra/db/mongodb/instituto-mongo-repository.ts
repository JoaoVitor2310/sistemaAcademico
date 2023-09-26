import { MongoHelper } from '@/infra/db'
import { AddInstitutoRepository } from '@/data/db/instituto'
import { AddInstituto } from '@/domain/usecases/instituto'

export class InstitutoMongoRepository implements AddInstitutoRepository {
  async add (data: AddInstituto.Params): Promise<AddInstituto.Result> {
    const institutoCollection = MongoHelper.getCollection('institutos')
    const result = await institutoCollection.insertOne(data)
    return result.insertedId !== null
  }
}

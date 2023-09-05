import { AddDiretorRepository } from '@/data/db/diretor'
import { AddDiretor } from '@/domain/usecases/diretor'
import { MongoHelper } from '@/infra/db'

export class DiretorMongoRepository implements AddDiretorRepository {
  async add (data: AddDiretor.Params): Promise<AddDiretor.Result> {
    const diretorCollection = MongoHelper.getCollection('diretor')
    const result = await diretorCollection.insertOne(data)
    return result.insertedId !== null
  }
}

import { MongoHelper } from '@/infra/db'
import {
  AddReitoriaRepository,
  GetReitoriaRepository
} from '@/data/db/reitoria'
import { AddReitoria, GetReitoria } from '@/domain/usecases/reitoria'
import { Reitoria } from '@/domain/model'

export class ReitoriaMongoRepository
implements AddReitoriaRepository, GetReitoriaRepository {
  async add (data: AddReitoria.Params): Promise<AddReitoria.Result> {
    const ReitoriaCollection = MongoHelper.getCollection('reitorias')
    const result = await ReitoriaCollection.insertOne(data)
    return result.insertedId !== null
  }

  async get (data: GetReitoria.Params): Promise<Reitoria.Params | false> {
    const ReitoriaCollection = MongoHelper.getCollection('reitorias')
    const result = await ReitoriaCollection.findOne({ id: data.id })
    if (!result) return false
    const response: Reitoria.Params = {
      id: result.id,
      telefone: result.telefone,
      endereco: result.endereco,
      nome: result.nome
    }
    return response
  }
}

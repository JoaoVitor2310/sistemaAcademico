import { AddNivelDeEnsino, GetNivelDeEnsino, DeleteNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'
import { MongoHelper } from '@/infra/db'
import { AddNivelDeEnsinoRepository } from '@/data/db/nivel_de_ensino/add-nivel-de-ensino-repository'

export class NivelDeEnsinoMongoRepository implements AddNivelDeEnsinoRepository {
  async add (data: AddNivelDeEnsino.Params): Promise<AddNivelDeEnsino.Result> {
    const nivelDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    const result = await nivelDeEnsinoCollection.insertOne(data)
    return result.insertedId !== null
  }

  async get (data: GetNivelDeEnsino.Params): Promise<GetNivelDeEnsino.Result> {
    const nivelDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    const result = await nivelDeEnsinoCollection.findOne({ nome: data })
    if (!result) return false
    return {
      id: result.id,
      nome: result.nome

    }
  }

  async delete (data: DeleteNivelDeEnsino.Params): Promise<DeleteNivelDeEnsino.Result> {
    const nivelDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    const result = await nivelDeEnsinoCollection.findOne({ id: data.id })
    await nivelDeEnsinoCollection.deleteOne({ id: data.id })
    if (!result) return false
    return {
      id: result.id,
      nome: result.nome
    }
  }
}

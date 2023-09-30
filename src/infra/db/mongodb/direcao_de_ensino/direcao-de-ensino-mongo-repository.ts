import { AddDirecaoDeEnsino, GetDirecaoDeEnsino, DeleteDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'
import { MongoHelper } from '@/infra/db'
import { AddDirecaoDeEnsinoRepository } from '@/data/db/direcao_de_ensino/add-direcao-de-ensino-repository'

export class DirecaoDeEnsinoMongoRepository implements AddDirecaoDeEnsinoRepository {
  async add (data: AddDirecaoDeEnsino.Params): Promise<AddDirecaoDeEnsino.Result> {
    const direcaoDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    const result = await direcaoDeEnsinoCollection.insertOne(data)
    return result.insertedId !== null
  }

  async get (data: GetDirecaoDeEnsino.Params): Promise<GetDirecaoDeEnsino.Result> {
    const direcaoDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    await direcaoDeEnsinoCollection.insertOne(data)
    const result = await direcaoDeEnsinoCollection.findOne({ nome: data.nome })
    if (!result) return false
    return {
      id: result.id,
      nome: result.nome,
      nivel_ensino: result.nivel_ensino,
      telefone: result.telefone
    }
  }

  async delete (data: DeleteDirecaoDeEnsino.Params): Promise<DeleteDirecaoDeEnsino.Result> {
    const direcaoDeEnsinoCollection = MongoHelper.getCollection('niveis_de_ensino')
    await direcaoDeEnsinoCollection.insertOne(data)
    const result = await direcaoDeEnsinoCollection.findOne({ id: data.id })
    await direcaoDeEnsinoCollection.deleteOne({ id: data.id })
    if (!result) return false
    return true
  }
}

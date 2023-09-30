import { AddDiretorDeEnsino, GetDiretorDeEnsino, DeleteDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'
import { MongoHelper } from '@/infra/db'
import { AddDiretorDeEnsinoRepository } from '@/data/db/diretor_de_ensino/add-diretor-de-ensino-repository'

export class DiretorDeEnsinoMongoRepository implements AddDiretorDeEnsinoRepository {
  async add (data: AddDiretorDeEnsino.Params): Promise<AddDiretorDeEnsino.Result> {
    const diretorDeEnsinoCollection = MongoHelper.getCollection('diretor_de_ensino')
    const result = await diretorDeEnsinoCollection.insertOne(data)
    return result.insertedId !== null
  }

  async get (data: GetDiretorDeEnsino.Params): Promise<GetDiretorDeEnsino.Result> {
    const diretorDeEnsinoCollection = MongoHelper.getCollection('diretor_de_ensino')
    await diretorDeEnsinoCollection.insertOne(data)
    const result = await diretorDeEnsinoCollection.findOne({ dataIni: data.dataIni })
    if (!result) return false
    return {
      id: undefined,
      dataFim: result.dataFim,
      dataIni: result.dataIni
    }
  }

  async delete (data: DeleteDiretorDeEnsino.Params): Promise<DeleteDiretorDeEnsino.Result> {
    const diretorDeEnsinoCollection = MongoHelper.getCollection('diretor_de_ensino')
    await diretorDeEnsinoCollection.insertOne(data)
    const result = await diretorDeEnsinoCollection.findOne({ dataIni: data.dataIni })
    await diretorDeEnsinoCollection.deleteOne({ id: result.id })
    if (!result) return false
    return true
  }
}

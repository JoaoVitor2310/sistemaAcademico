import { AddDiretorRepository } from '@/data/db/diretor'
import { AddDiretor } from '@/domain/usecases/diretor'
import { MongoHelper } from '@/infra/db'

export class DiretorMongoRepository implements AddDiretorRepository {
  async add (data: AddDiretor.Params): Promise<AddDiretor.Result> {
    const diretorCollection = MongoHelper.getCollection('diretor')
    const result = await diretorCollection.insertOne(data)
    return result.insertedId !== null
  }

  async get (data: GetDiretor.Params): Promise<GetDiretor.Result> {
    const diretorCollection = MongoHelper.getCollection('diretor')
    const result = await diretorCollection.findOne({ nome: data.nome })
    if (!result) return false
    return {
      id: result.id,
      endereco: result.endereco,
      nome: result.nome,
      telefone: result.telefone
    }
  }

  async delete (data: DeleteDiretor.Params): Promise<DeleteDiretor.Result> {
    const diretorCollection = MongoHelper.getCollection('diretor')
    const result = await diretorCollection.findOne({ id: data.id })
    await diretorCollection.deleteOne({ id: data.id })
    if (!result) return false
    return {
      id: result.id,
      endereco: result.endereco,
      nome: result.nome,
      telefone: result.telefone
    }
  }
}

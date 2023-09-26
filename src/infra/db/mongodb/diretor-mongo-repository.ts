import { AddDiretorRepository } from '@/data/db/diretor'
import { DeleteDiretorRepository } from '@/data/db/diretor/delete-diretor-repository'
import { AddDiretor, DeleteDiretor } from '@/domain/usecases/diretor'
import { MongoHelper } from '@/infra/db'

export class DiretorMongoRepository implements AddDiretorRepository, DeleteDiretorRepository {
  async add (data: AddDiretor.Params): Promise<AddDiretor.Result> {
    const diretorCollection = MongoHelper.getCollection('diretor')
    const result = await diretorCollection.insertOne(data)
    return result.insertedId !== null
  }

  async delete (data: DeleteDiretor.Params): Promise<DeleteDiretor.Result> {
    const diretorCollection = MongoHelper.getCollection('diretor')
    const result = await diretorCollection.findOne({ id: data.id })
    await diretorCollection.deleteOne({ id: data.id })
    if (!result) return false
    return {
      id: result.id,
      servidor: result.servidor,
      campus: result.campus,
      dataInicio: result.dataInicio,
      dataFim: result.dataFim
    }
  }
}

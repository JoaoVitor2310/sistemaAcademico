import { AddCampus, GetCampus, DeleteCampus } from '@/domain/usecases/campus'
import { MongoHelper } from '@/infra/db'
import { AddCampusRepository } from '@/data/db/campus/add-campus-repository'
import { GetCampusRepository } from '@/data/db/campus/get-campus-repository'
import { DeleteCampusRepository } from '@/data/db/campus'

export class CampusMongoRepository implements AddCampusRepository, GetCampusRepository, DeleteCampusRepository {
  async add (data: AddCampus.Params): Promise<AddCampus.Result> {
    const campusCollection = MongoHelper.getCollection('campus')
    const result = await campusCollection.insertOne(data)
    return result.insertedId !== null
  }

  async get (data: GetCampus.Params): Promise<GetCampus.Result> {
    const campusCollection = MongoHelper.getCollection('campus')
    const result = await campusCollection.findOne({ nome: data.nome })
    if (!result) return false
    return {
      id: result.id,
      endereco: result.endereco,
      nome: result.nome,
      telefone: result.telefone
    }
  }

  async delete (data: DeleteCampus.Params): Promise<DeleteCampus.Result> {
    const campusCollection = MongoHelper.getCollection('campus')
    const result = await campusCollection.findOne({ id: data.id })
    await campusCollection.deleteOne({ id: data.id })
    if (!result) return false
    return {
      id: result.id,
      endereco: result.endereco,
      nome: result.nome,
      telefone: result.telefone
    }
  }
}


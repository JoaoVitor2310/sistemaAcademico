import { AddCampus, GetCampus, EditCampus, DeleteCampus } from '@/domain/usecases/campus'
import { MongoHelper } from '@/infra/db'
import { AddCampusRepository } from '@/data/db/campus/add-campus-repository'
import { GetCampusRepository } from '@/data/db/campus/get-campus-repository'
import { EditCampusRepository } from '@/data/db/campus/edit-campus-repository'
import { DeleteCampusRepository } from '@/data/db/campus'

export class CampusMongoRepository implements AddCampusRepository, GetCampusRepository, DeleteCampusRepository, EditCampusRepository {
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

  async edit (data: EditCampus.Params): Promise<EditCampus.Result> {
    const campusCollection = MongoHelper.getCollection('campus')
    const querry = { nome: data.nome }
    const newValues = { $set: data }
    const result = await campusCollection.findOne(querry)
    if (result) {
      const result = await campusCollection.updateOne(querry, newValues)
      return true
    } else {
      return false
    }
  }
}

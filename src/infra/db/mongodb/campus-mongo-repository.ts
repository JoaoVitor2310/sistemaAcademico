import { AddCampus, GetCampus, EditCampus } from '@/domain/usecases/campus'
import { MongoHelper } from '@/infra/db'
import { AddCampusRepository } from '@/data/db/campus/add-campus-repository'
import { GetCampusRepository } from '@/data/db/campus/get-campus-repository'
import { EditCampusRepository } from '@/data/db/campus/edit-campus-repository'

export class CampusMongoRepository implements AddCampusRepository, GetCampusRepository, EditCampusRepository {
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

  async edit (data: EditCampus.Params): Promise<EditCampus.Result> {
    const campusCollection = MongoHelper.getCollection('campus')
    const querry = { nome: data.nome }
    const newValues = { $set: data }
    const result = await campusCollection.findOne(querry)
    if (result) {
      const result = await campusCollection.updateOne(querry, newValues)
      console.log(result)
      return true
    } else {
      return false
    }
  }
}

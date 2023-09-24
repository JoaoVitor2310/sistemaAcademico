import { MongoHelper } from '@/infra/db'
import {
  AddServidorRepository,
  GetServidorRepository
} from '@/data/db/servidor'
import { AddServidor, GetServidor } from '@/domain/usecases/servidor'
import { Servidor } from '@/domain/model'

export class ServidorMongoRepository
implements AddServidorRepository, GetServidorRepository {
  async add (data: AddServidor.Params): Promise<AddServidor.Result> {
    const ServidorCollection = MongoHelper.getCollection('servidores')
    const result = await ServidorCollection.insertOne(data)
    return result.insertedId !== null
  }

  async get (data: GetServidor.Params): Promise<Servidor.Params | false> {
    const ServidorCollection = MongoHelper.getCollection('servidores')
    const result = await ServidorCollection.findOne({ id: data.id })
    if (!result) return false
    const response: Servidor.Params = {
      id: result.id,
      matricula: result.matricula,
      nome: result.nome
    }
    return response
  }
}

import {
  AddServidorRepository,
  GetServidorRepository
} from '@/data/db/servidor'
import { AddServidor, GetServidor } from '@/domain/usecases/servidor'
import { mockServidorParams } from '@/tests/domain/mocks'

export class ServidorRepositorySpy
implements AddServidorRepository, GetServidorRepository {
  params: AddServidor.Params | GetServidor.Params
  result = false

  async add (params: AddServidor.Params): Promise<AddServidor.Result> {
    this.params = params
    return this.result
  }

  async get (params: GetServidor.Params): Promise<GetServidor.Result> {
    this.params = params
    return mockServidorParams()
  }

  async findByNome(nome: string): Promise<boolean> {
    if (nome === 'NomeExistente') {
      return true; // Simula um servidor com o mesmo nome existente
    } else {
      return false; // Simula um servidor com o mesmo nome não existente
    }
  }
}

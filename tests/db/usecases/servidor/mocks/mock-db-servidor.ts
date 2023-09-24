import { AddServidorRepository } from '@/data/db/servidor'
import { AddServidor } from '@/domain/usecases/servidor'

export class AddServidorRepositorySpy implements AddServidorRepository {
  params: AddServidor.Params
  result = false

  async add (params: AddServidor.Params): Promise<AddServidor.Result> {
    this.params = params
    return this.result
  }
}

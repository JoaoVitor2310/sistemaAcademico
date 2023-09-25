import { AddReitoriaRepository } from '@/data/db/reitoria'
import { AddReitoria } from '@/domain/usecases/reitoria'

export class AddReitoriaRepositorySpy implements AddReitoriaRepository {
  params: AddReitoria.Params
  result = false

  async add (params: AddReitoria.Params): Promise<AddReitoria.Result> {
    this.params = params
    return this.result
  }
}

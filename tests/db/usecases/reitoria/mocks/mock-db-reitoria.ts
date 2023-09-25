import {
  AddReitoriaRepository,
  GetReitoriaRepository
} from '@/data/db/reitoria'
import { AddReitoria, GetReitoria } from '@/domain/usecases/reitoria'
import { mockReitoriaParams } from '@/tests/domain/mocks'

export class ReitoriaRepositorySpy
implements AddReitoriaRepository, GetReitoriaRepository {
  params: AddReitoria.Params | GetReitoria.Params
  result = false

  async add (params: AddReitoria.Params): Promise<AddReitoria.Result> {
    this.params = params
    return this.result
  }

  async get (params: GetReitoria.Params): Promise<GetReitoria.Result> {
    this.params = params
    return mockReitoriaParams()
  }
}

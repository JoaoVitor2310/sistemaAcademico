import { AddReitoria, GetReitoria } from '@/domain/usecases/reitoria'
import { mockReitoriaParams } from '@/tests/domain/mocks'

export class ReitoriaSpy implements AddReitoria, GetReitoria {
  params: AddReitoria.Params | GetReitoria.Params

  async add (params: AddReitoria.Params): Promise<AddReitoria.Result> {
    this.params = params
    return true
  }

  async get (params: GetReitoria.Params): Promise<GetReitoria.Result> {
    this.params = params
    return mockReitoriaParams()
  }
}

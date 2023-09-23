import { AddInstitutoRepository } from '@/data/db/instituto'
import { AddInstituto } from '@/domain/usecases/instituto'

export class AddInstitutoRepositorySpy implements AddInstitutoRepository {
  params: AddInstituto.Params
  result = false

  async add (params: AddInstituto.Params): Promise<AddInstituto.Result> {
    this.params = params
    return this.result
  }
}

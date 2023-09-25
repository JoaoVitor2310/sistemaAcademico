import { AddInstituto } from '@/domain/usecases/instituto'

export class AddInstitutoSpy implements AddInstituto {
  params: AddInstituto.Params

  async add (params: AddInstituto.Params): Promise<AddInstituto.Result> {
    this.params = params
    return true
  }
}

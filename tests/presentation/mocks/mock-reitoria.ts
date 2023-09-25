import { AddReitoria } from '@/domain/usecases/reitoria'

export class AddReitoriaSpy implements AddReitoria {
  params: AddReitoria.Params

  async add (params: AddReitoria.Params): Promise<AddReitoria.Result> {
    this.params = params
    return true
  }
}

import { AddServidor } from '@/domain/usecases/servidor'

export class AddServidorSpy implements AddServidor {
  params: AddServidor.Params

  async add (params: AddServidor.Params): Promise<AddServidor.Result> {
    this.params = params
    return true
  }
}

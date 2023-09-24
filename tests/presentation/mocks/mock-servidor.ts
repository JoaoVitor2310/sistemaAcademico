import { AddServidor, GetServidor } from '@/domain/usecases/servidor'
import { mockServidorParams } from '@/tests/domain/mocks'

export class ServidorSpy implements AddServidor, GetServidor {
  params: AddServidor.Params | GetServidor.Params

  async add (params: AddServidor.Params): Promise<AddServidor.Result> {
    this.params = params
    return true
  }

  async get (params: GetServidor.Params): Promise<GetServidor.Result> {
    this.params = params
    return mockServidorParams()
  }
}

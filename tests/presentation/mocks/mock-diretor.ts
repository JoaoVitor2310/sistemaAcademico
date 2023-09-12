import { AddDiretor } from '@/domain/usecases/diretor'

export class AddDiretorSpy implements AddDiretor {
  params: AddDiretor.Params

  async add (params: AddDiretor.Params): Promise<boolean> {
    this.params = params
    return true
  }
}

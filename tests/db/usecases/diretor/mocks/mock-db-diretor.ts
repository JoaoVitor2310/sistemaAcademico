import { AddDiretorRepository } from '@/data/db/diretor'
import { AddDiretor } from '@/domain/usecases/diretor'

export class AddDiretorRepositorySpy implements AddDiretorRepository {
  params: AddDiretor.Params
  result = true

  async add (params: AddDiretor.Params): Promise<AddDiretor.Result> {
    this.params = params
    return this.result
  }
}

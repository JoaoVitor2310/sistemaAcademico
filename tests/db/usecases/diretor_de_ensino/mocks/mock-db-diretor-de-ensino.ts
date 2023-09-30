import { AddDiretorDeEnsinoRepository } from '@/data/db/diretor_de_ensino'
import { AddDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'

export class AddDiretorDeEnsinoRepositorySpy implements AddDiretorDeEnsinoRepository {
  params: AddDiretorDeEnsino.Params
  result = false

  async add (params: AddDiretorDeEnsino.Params): Promise<AddDiretorDeEnsino.Result> {
    this.params = params
    return this.result
  }
}

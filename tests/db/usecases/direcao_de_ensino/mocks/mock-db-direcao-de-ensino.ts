import { AddDirecaoDeEnsinoRepository } from '@/data/db/direcao_de_ensino'
import { AddDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'

export class AddDirecaoDeEnsinoRepositorySpy implements AddDirecaoDeEnsinoRepository {
  params: AddDirecaoDeEnsino.Params
  result = false

  async add (params: AddDirecaoDeEnsino.Params): Promise<AddDirecaoDeEnsino.Result> {
    this.params = params
    return this.result
  }
}

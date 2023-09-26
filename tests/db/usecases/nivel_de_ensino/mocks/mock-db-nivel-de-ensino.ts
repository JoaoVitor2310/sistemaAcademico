import { AddNivelDeEnsinoRepository } from '@/data/db/nivel_de_ensino'
import { AddNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'

export class AddNivelDeEnsinoRepositorySpy implements AddNivelDeEnsinoRepository {
  params: AddNivelDeEnsino.Params
  result = false

  async add (params: AddNivelDeEnsino.Params): Promise<AddNivelDeEnsino.Result> {
    this.params = params
    return this.result
  }
}

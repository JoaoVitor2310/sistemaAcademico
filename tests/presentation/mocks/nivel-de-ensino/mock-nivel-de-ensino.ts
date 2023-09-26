import { AddNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'

export class AddNivelDeEnsinoSpy implements AddNivelDeEnsino {
  params: AddNivelDeEnsino.Params

  async add (params: AddNivelDeEnsino.Params): Promise<AddNivelDeEnsino.Result> {
    this.params = params
    return true
  }
}

import { AddNivelDeEnsino, DeleteNivelDeEnsino, GetNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'

export class AddNivelDeEnsinoSpy implements AddNivelDeEnsino {
  params: AddNivelDeEnsino.Params

  async add (params: AddNivelDeEnsino.Params): Promise<AddNivelDeEnsino.Result> {
    this.params = params
    return true
  }
}

export class GetNivelDeEnsinoSpy implements GetNivelDeEnsino {
  params: GetNivelDeEnsino.Params

  async get (params: GetNivelDeEnsino.Params): Promise<GetNivelDeEnsino.Result> {
    this.params = params
    return true
  }
}

export class DeleteNivelDeEnsinoSpy implements DeleteNivelDeEnsino {
  params: DeleteNivelDeEnsino.Params

  async delete (params: DeleteNivelDeEnsino.Params): Promise<DeleteNivelDeEnsino.Result> {
    this.params = params
    return true
  }
}

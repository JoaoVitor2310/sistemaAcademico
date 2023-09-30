import { AddDiretorDeEnsino, DeleteDiretorDeEnsino, GetDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'

export class AddDiretorDeEnsinoSpy implements AddDiretorDeEnsino {
  params: AddDiretorDeEnsino.Params

  async add (params: AddDiretorDeEnsino.Params): Promise<AddDiretorDeEnsino.Result> {
    this.params = params
    return true
  }
}

export class GetDiretorDeEnsinoSpy implements GetDiretorDeEnsino {
  params: GetDiretorDeEnsino.Params

  async get (params: GetDiretorDeEnsino.Params): Promise<GetDiretorDeEnsino.Result> {
    this.params = params
    return true
  }
}

export class DeleteDiretorDeEnsinoSpy implements DeleteDiretorDeEnsino {
  params: DeleteDiretorDeEnsino.Params

  async delete (params: DeleteDiretorDeEnsino.Params): Promise<DeleteDiretorDeEnsino.Result> {
    this.params = params
    return true
  }
}

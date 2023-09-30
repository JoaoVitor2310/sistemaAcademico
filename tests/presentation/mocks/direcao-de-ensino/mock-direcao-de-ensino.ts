import { AddDirecaoDeEnsino, DeleteDirecaoDeEnsino, GetDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'

export class AddDirecaoDeEnsinoSpy implements AddDirecaoDeEnsino {
  params: AddDirecaoDeEnsino.Params

  async add (params: AddDirecaoDeEnsino.Params): Promise<AddDirecaoDeEnsino.Result> {
    this.params = params
    return true
  }
}

export class GetDirecaoDeEnsinoSpy implements GetDirecaoDeEnsino {
  params: GetDirecaoDeEnsino.Params

  async get (params: GetDirecaoDeEnsino.Params): Promise<GetDirecaoDeEnsino.Result> {
    this.params = params
    return true
  }
}

export class DeleteDirecaoDeEnsinoSpy implements DeleteDirecaoDeEnsino {
  params: DeleteDirecaoDeEnsino.Params

  async delete (params: DeleteDirecaoDeEnsino.Params): Promise<DeleteDirecaoDeEnsino.Result> {
    this.params = params
    return true
  }
}

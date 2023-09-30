import { DeleteDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'

export interface DeleteDirecaoDeEnsinoRepository {
  delete: (input: DeleteDirecaoDeEnsinoRepository.Params) => Promise<DeleteDirecaoDeEnsinoRepository.Result>
}

export namespace DeleteDirecaoDeEnsinoRepository {
  export type Params = DeleteDirecaoDeEnsino.Params
  export type Result = DeleteDirecaoDeEnsino.Result
}

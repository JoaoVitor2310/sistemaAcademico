import { GetDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'

export interface GetDirecaoDeEnsinoRepository {
  get: (input: GetDirecaoDeEnsinoRepository.Params) => Promise<GetDirecaoDeEnsinoRepository.Result>
}

export namespace GetDirecaoDeEnsinoRepository {
  export type Params = GetDirecaoDeEnsino.Params
  export type Result = GetDirecaoDeEnsino.Result
}

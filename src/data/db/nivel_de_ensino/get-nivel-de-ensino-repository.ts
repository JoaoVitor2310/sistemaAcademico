import { GetNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'

export interface GetNivelDeEnsinoRepository {
  get: (input: GetNivelDeEnsinoRepository.Params) => Promise<GetNivelDeEnsinoRepository.Result>
}

export namespace GetNivelDeEnsinoRepository {
  export type Params = GetNivelDeEnsino.Params
  export type Result = GetNivelDeEnsino.Result
}

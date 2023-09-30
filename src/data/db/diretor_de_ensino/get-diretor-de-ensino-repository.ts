import { GetDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'

export interface GetDiretorDeEnsinoRepository {
  get: (input: GetDiretorDeEnsinoRepository.Params) => Promise<GetDiretorDeEnsinoRepository.Result>
}

export namespace GetDiretorDeEnsinoRepository {
  export type Params = GetDiretorDeEnsino.Params
  export type Result = GetDiretorDeEnsino.Result
}

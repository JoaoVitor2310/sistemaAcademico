import { DeleteNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'

export interface DeleteNivelDeEnsinoRepository {
  delete: (input: DeleteNivelDeEnsinoRepository.Params) => Promise<DeleteNivelDeEnsinoRepository.Result>
}

export namespace DeleteNivelDeEnsinoRepository {
  export type Params = DeleteNivelDeEnsino.Params
  export type Result = DeleteNivelDeEnsino.Result
}

import { AddNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'

export interface AddNivelDeEnsinoRepository {
  add: (input: AddNivelDeEnsinoRepository.Params) => Promise<AddNivelDeEnsinoRepository.Result>

}

export namespace AddNivelDeEnsinoRepository {
  export type Params = AddNivelDeEnsino.Params

  export type Result = boolean
}


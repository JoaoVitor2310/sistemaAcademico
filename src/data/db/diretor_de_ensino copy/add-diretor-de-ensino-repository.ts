import { AddDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'

export interface AddDiretorDeEnsinoRepository {
  add: (input: AddDiretorDeEnsinoRepository.Params) => Promise<AddDiretorDeEnsinoRepository.Result>

}

export namespace AddDiretorDeEnsinoRepository {
  export type Params = AddDiretorDeEnsino.Params

  export type Result = boolean
}


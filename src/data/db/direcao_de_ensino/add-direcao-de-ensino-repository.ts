import { AddDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'

export interface AddDirecaoDeEnsinoRepository {
  add: (input: AddDirecaoDeEnsinoRepository.Params) => Promise<AddDirecaoDeEnsinoRepository.Result>

}

export namespace AddDirecaoDeEnsinoRepository {
  export type Params = AddDirecaoDeEnsino.Params

  export type Result = boolean
}



import { DirecaoDeEnsino } from '@/domain/model/direcao_de_ensino'

export interface AddDirecaoDeEnsino {
  add: (AddDirecaoDeEnsino: AddDirecaoDeEnsino.Params) => Promise<AddDirecaoDeEnsino.Result>
}
export namespace AddDirecaoDeEnsino {
  export type Params = DirecaoDeEnsino.Params

  export type Result = boolean
}

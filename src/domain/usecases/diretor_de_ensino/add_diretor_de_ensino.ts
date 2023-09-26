
import { DiretorDeEnsino } from '@/domain/model/diretor_de_ensino'

export interface AddDiretorDeEnsino {
  add: (addDiretorDeEnsino: AddDiretorDeEnsino.Params) => Promise<AddDiretorDeEnsino.Result>
}
export namespace AddDiretorDeEnsino {
  export type Params = DiretorDeEnsino.Params

  export type Result = boolean
}

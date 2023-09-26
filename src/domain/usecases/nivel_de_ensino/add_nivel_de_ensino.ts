
import { NivelDeEnsino } from '@/domain/model/nivel_de_ensino'

export interface AddNivelDeEnsino {
  add: (addNivelDeEnsino: AddNivelDeEnsino.Params) => Promise<AddNivelDeEnsino.Result>
}
export namespace AddNivelDeEnsino {
  export type Params = NivelDeEnsino.Params

  export type Result = boolean
}

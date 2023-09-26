import { NivelDeEnsino } from '@/domain/model/nivel_de_ensino'

export interface GetNivelDeEnsino {
  get: (getNivelDeEnsino: GetNivelDeEnsino.Params) => Promise<GetNivelDeEnsino.Result>
}

export namespace GetNivelDeEnsino {
  export type Params = Omit<NivelDeEnsino.Params, 'id' >
  export type Result = NivelDeEnsino.Params | boolean
}

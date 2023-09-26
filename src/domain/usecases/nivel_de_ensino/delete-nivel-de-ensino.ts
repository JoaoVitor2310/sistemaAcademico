import { NivelDeEnsino } from '@/domain/model/nivel_de_ensino'

export interface DeleteNivelDeEnsino {
  delete: (DeleteNivelDeEnsino: DeleteNivelDeEnsino.Params) => Promise<DeleteNivelDeEnsino.Result>
}

export namespace DeleteNivelDeEnsino {
  export type Params = Omit<NivelDeEnsino.Params, 'nome' >
  export type Result = NivelDeEnsino.Params | boolean
}

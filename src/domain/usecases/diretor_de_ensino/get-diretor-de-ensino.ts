import { DiretorDeEnsino } from '@/domain/model/diretor_de_ensino'

export interface GetDiretorDeEnsino {
  get: (getDiretorDeEnsino: GetDiretorDeEnsino.Params) => Promise<GetDiretorDeEnsino.Result>
}

export namespace GetDiretorDeEnsino {
  export type Params = Omit<DiretorDeEnsino.Params, 'id' >
  export type Result = DiretorDeEnsino.Params | boolean
}

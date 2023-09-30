import { DirecaoDeEnsino } from '@/domain/model/direcao_de_ensino'

export interface GetDirecaoDeEnsino {
  get: (getDirecaoDeEnsino: GetDirecaoDeEnsino.Params) => Promise<GetDirecaoDeEnsino.Result>
}

export namespace GetDirecaoDeEnsino {
  export type Params = Omit<DirecaoDeEnsino.Params, 'id' >
  export type Result = DirecaoDeEnsino.Params | boolean
}

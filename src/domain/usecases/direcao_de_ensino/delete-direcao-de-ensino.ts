import { DirecaoDeEnsino } from '@/domain/model/direcao_de_ensino'

export interface DeleteDirecaoDeEnsino {
  delete: (DeleteDirecaoDeEnsino: DeleteDirecaoDeEnsino.Params) => Promise<DeleteDirecaoDeEnsino.Result>
}

export namespace DeleteDirecaoDeEnsino {
  export type Params = Omit<DirecaoDeEnsino.Params, 'nome' >
  export type Result = DirecaoDeEnsino.Params | boolean
}

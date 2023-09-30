import { DiretorDeEnsino } from '@/domain/model/diretor_de_ensino'

export interface DeleteDiretorDeEnsino {
  delete: (DeleteDiretorDeEnsino: DeleteDiretorDeEnsino.Params) => Promise<DeleteDiretorDeEnsino.Result>
}

export namespace DeleteDiretorDeEnsino {
  export type Params = Omit<DiretorDeEnsino.Params, 'nome' >
  export type Result = DiretorDeEnsino.Params | boolean
}

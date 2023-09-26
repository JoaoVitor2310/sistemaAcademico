import { Diretor } from '@/domain/model/diretor'

export interface DeleteDiretor {
  delete: (DeleteDiretor: DeleteDiretor.Params) => Promise<DeleteDiretor.Result>
}

export namespace DeleteDiretor {
  export type Params = Omit<Diretor.Params, 'servidor' | 'campus' | 'dataInicio' | 'dataFim'>
  export type Result = Diretor.Params | boolean
}

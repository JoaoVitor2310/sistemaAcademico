import { Campus } from '@/domain/model/campus'

export interface DeleteCampus {
  delete: (DeleteCampus: DeleteCampus.Params) => Promise<DeleteCampus.Result>
}

export namespace DeleteCampus {
  export type Params = Omit<Campus.Params, 'nome' | 'endereco' | 'telefone'>
  export type Result = Campus.Params | boolean
}

import { Campus } from '@/domain/model/campus'

export interface EditCampus {
  edit: (editCampus: EditCampus.Params) => Promise<EditCampus.Result>
}

export namespace EditCampus {
  export type Params = Omit<Campus.Params, 'id' | 'endereco' | 'telefone'> & { id?: string, endereco?: string, telefone?: string }
  export type Result = Campus.Params | boolean
}

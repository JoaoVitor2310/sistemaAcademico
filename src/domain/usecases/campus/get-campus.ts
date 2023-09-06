import { Campus } from '@/domain/model/campus'

export interface GetCampus {
  get: (getCampus: GetCampus.Params) => Promise<GetCampus.Result>
}

export namespace GetCampus {
  export type Params = Omit<Campus.Params, 'nome' | 'endereco' | 'telefone'>
  export type Result = Campus.Params
}

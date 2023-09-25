import { Reitoria } from '@/domain/model'

export interface GetReitoria {
  get: (getIReitoria: GetReitoria.Params) => Promise<GetReitoria.Result>
}
export namespace GetReitoria {
  export type Params = Omit<Reitoria.Params, 'nome' | 'matricula'>

  export type Result = Reitoria.Params | false
}

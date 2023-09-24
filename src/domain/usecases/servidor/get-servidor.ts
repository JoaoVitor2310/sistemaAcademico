import { Servidor } from '@/domain/model'

export interface GetServidor {
  get: (getIServidor: GetServidor.Params) => Promise<GetServidor.Result>
}
export namespace GetServidor {
  export type Params = Omit<Servidor.Params, 'nome' | 'matricula'>

  export type Result = Servidor.Params | false
}

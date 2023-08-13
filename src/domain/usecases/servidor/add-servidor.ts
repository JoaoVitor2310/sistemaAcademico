
import { Servidor } from '@/domain/model'

export interface AddServidor {
  add: (addIServidor: AddServidor.Params) => Promise<AddServidor.Result>
}
export namespace AddServidor {
  export type Params = Servidor.Params

  export type Result = boolean
}

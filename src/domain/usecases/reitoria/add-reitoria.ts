
import { Reitoria } from '@/domain/model'

export interface AddReitoria {
  add: (addIReitoria: AddReitoria.Params) => Promise<AddReitoria.Result>
}
export namespace AddReitoria {
  export type Params = Reitoria.Params

  export type Result = boolean
}

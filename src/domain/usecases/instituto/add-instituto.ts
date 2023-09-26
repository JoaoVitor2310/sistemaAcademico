
import { Instituto } from '@/domain/model'

export interface AddInstituto {
  add: (addIinstituto: AddInstituto.Params) => Promise<AddInstituto.Result>
}
export namespace AddInstituto {
  export type Params = Instituto.Params

  export type Result = boolean
}

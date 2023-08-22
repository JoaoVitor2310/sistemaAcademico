
import { Diretor } from '@/domain/model'

export interface AddDiretor {
  add: (addIdiretor: AddDiretor.Params) => Promise<AddDiretor.Result>
}
export namespace AddDiretor {
  export type Params = Diretor.Params

  export type Result = boolean
}

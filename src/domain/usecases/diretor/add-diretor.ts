
import { Diretor } from '@/domain/model/diretor'

export interface AddDiretor {
  add: (addDiretor: AddDiretor.Params) => Promise<AddDiretor.Result>
}
export namespace AddDiretor {
  export type Params = Diretor.Params

  export type Result = boolean
}

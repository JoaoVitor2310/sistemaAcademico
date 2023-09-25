import { AddInstituto } from '@/domain/usecases/instituto'

export interface AddInstitutoRepository {
  add: (input: AddInstitutoRepository.Params) => Promise<AddInstitutoRepository.Result>

}

export namespace AddInstitutoRepository {
  export type Params = AddInstituto.Params

  export type Result = boolean
}


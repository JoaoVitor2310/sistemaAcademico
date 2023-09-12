import { AddDiretor } from '@/domain/usecases/diretor'

export interface AddDiretorRepository {
  add: (input: AddDiretorRepository.Params) => Promise<AddDiretorRepository.Result>
}

export namespace AddDiretorRepository {
  export type Params = AddDiretor.Params
  export type Result = boolean
}


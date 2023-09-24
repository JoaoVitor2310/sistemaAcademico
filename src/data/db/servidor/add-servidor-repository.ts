import { AddServidor } from '@/domain/usecases/servidor'

export interface AddServidorRepository {
  add: (input: AddServidorRepository.Params) => Promise<AddServidorRepository.Result>

}

export namespace AddServidorRepository {
  export type Params = AddServidor.Params

  export type Result = boolean
}


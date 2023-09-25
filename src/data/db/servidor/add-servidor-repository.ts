import { AddServidor } from '@/domain/usecases/servidor'

export interface AddServidorRepository {
  add: (input: AddServidorRepository.Params) => Promise<AddServidorRepository.Result>
  findByNome(nome: string): Promise<boolean>;
}

export namespace AddServidorRepository {
  export type Params = AddServidor.Params

  export type Result = boolean
}


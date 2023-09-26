import { AddReitoria } from '@/domain/usecases/reitoria'

export interface AddReitoriaRepository {
  add: (input: AddReitoriaRepository.Params) => Promise<AddReitoriaRepository.Result>
  findByNome(nome: string): Promise<boolean>;
}

export namespace AddReitoriaRepository {
  export type Params = AddReitoria.Params

  export type Result = boolean
}


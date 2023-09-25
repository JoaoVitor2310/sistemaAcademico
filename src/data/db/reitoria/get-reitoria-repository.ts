import { GetReitoria } from '@/domain/usecases/reitoria'

export interface GetReitoriaRepository {
  get: (
    input: GetReitoriaRepository.Params
  ) => Promise<GetReitoriaRepository.Result>
}

export namespace GetReitoriaRepository {
  export type Params = GetReitoria.Params

  export type Result = GetReitoria.Result | false
}

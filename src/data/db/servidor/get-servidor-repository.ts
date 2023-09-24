import { GetServidor } from '@/domain/usecases/servidor'

export interface GetServidorRepository {
  get: (
    input: GetServidorRepository.Params
  ) => Promise<GetServidorRepository.Result>
}

export namespace GetServidorRepository {
  export type Params = GetServidor.Params

  export type Result = GetServidor.Result | false
}

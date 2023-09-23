import { GetCampus } from '@/domain/usecases/campus'

export interface GetCampusRepository {
  get: (input: GetCampusRepository.Params) => Promise<GetCampusRepository.Result>
}

export namespace GetCampusRepository {
  export type Params = GetCampus.Params
  export type Result = GetCampus.Result
}

import { AddCampus } from '@/domain/usecases/campus'

export interface AddCampusRepository {
  add: (input: AddCampusRepository.Params) => Promise<AddCampusRepository.Result>
}

export namespace AddCampusRepository {
  export type Params = AddCampus.Params
  export type Result = boolean
}

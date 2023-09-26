import { EditCampus } from '@/domain/usecases/campus'

export interface EditCampusRepository {
  edit: (input: EditCampusRepository.Params) => Promise<EditCampusRepository.Result>
}

export namespace EditCampusRepository {
  export type Params = EditCampus.Params
  export type Result = EditCampus.Result
}

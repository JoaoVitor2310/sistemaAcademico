import { DeleteCampus } from '@/domain/usecases/campus'

export interface DeleteCampusRepository {
  delete: (input: DeleteCampusRepository.Params) => Promise<DeleteCampusRepository.Result>
}

export namespace DeleteCampusRepository {
  export type Params = DeleteCampus.Params
  export type Result = DeleteCampus.Result
}

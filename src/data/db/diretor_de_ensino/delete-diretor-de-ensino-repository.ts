import { DeleteDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'

export interface DeleteDiretorDeEnsinoRepository {
  delete: (input: DeleteDiretorDeEnsinoRepository.Params) => Promise<DeleteDiretorDeEnsinoRepository.Result>
}

export namespace DeleteDiretorDeEnsinoRepository {
  export type Params = DeleteDiretorDeEnsino.Params
  export type Result = DeleteDiretorDeEnsino.Result
}

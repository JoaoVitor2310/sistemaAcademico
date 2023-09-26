import { DeleteDiretor } from '@/domain/usecases/diretor'

export interface DeleteDiretorRepository {
  delete: (input: DeleteDiretorRepository.Params) => Promise<DeleteDiretorRepository.Result>
}

export namespace DeleteDiretorRepository {
  export type Params = DeleteDiretor.Params
  export type Result = DeleteDiretor.Result
}

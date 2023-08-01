import { AddInstituto } from '@/domain/usecases/instituto'

export interface AddInstitutoRepository {
  add: (input: AddInstituto.Params) => Promise<AddInstituto.Result>

}

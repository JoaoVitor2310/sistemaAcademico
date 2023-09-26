import { DeleteCampusRepository } from '@/data/db/campus'
import { DeleteCampus } from '@/domain/usecases/campus'

export class DeleteCampusRepositorySpy implements DeleteCampusRepository {
  params: DeleteCampus.Params
  result = false

  async delete (params: DeleteCampus.Params): Promise<DeleteCampus.Result> {
    this.params = params
    return this.result
  }
}

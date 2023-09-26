import { DeleteCampusRepository } from '@/data/db/campus'
import { DeleteCampus } from '@/domain/usecases/campus'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbDeleteCampus implements DeleteCampus {
  constructor (
    private readonly deleteCampusRepository: DeleteCampusRepository
  ) { }

  async delete (deleteCampus: DeleteCampus.Params): Promise<DeleteCampus.Result> {
    const campus = await this.deleteCampusRepository.delete({ id: deleteCampus.id })
    if (!campus) throw new NotFoundError('Campus not found')
    return campus
  }
}

import { EditCampusRepository } from '@/data/db/campus'
import { EditCampus } from '@/domain/usecases/campus'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbEditCampus implements EditCampus {
  constructor (
    private readonly editCampusRepository: EditCampusRepository
  ) { }

  async edit (editCampus: EditCampus.Params): Promise<EditCampus.Result> {
    const campus = await this.editCampusRepository.edit(editCampus)
    if (!campus) throw new NotFoundError('Campus not found')
    return campus
  }
}

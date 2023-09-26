import { GetCampusRepository } from '@/data/db/campus'
import { GetCampus } from '@/domain/usecases/campus'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbGetCampus implements GetCampus {
  constructor (
    private readonly getCampusRepository: GetCampusRepository
  ) { }

  async get (getCampus: GetCampus.Params): Promise<GetCampus.Result> {
    const campus = await this.getCampusRepository.get({ nome: getCampus.nome })
    if (!campus) throw new NotFoundError('Campus not found')
    return campus
  }
}

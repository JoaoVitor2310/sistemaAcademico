import { GetCampusRepository } from '@/data/db/campus'
import { GetCampus } from '@/domain/usecases/campus'

export class DbGetCampus implements GetCampus {
  constructor (
    private readonly getCampusRepository: GetCampusRepository
  ) { }

  async get (getCampus: GetCampus.Params): Promise<GetCampus.Result | boolean> {
    const campus = await this.getCampusRepository.get({ nome: getCampus.nome })
    if (!campus) return false
    return campus
  }
}

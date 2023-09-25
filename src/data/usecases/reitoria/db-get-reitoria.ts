import { GetReitoriaRepository } from '@/data/db/reitoria'
import { GetReitoria } from '@/domain/usecases/reitoria'

export class DbGetReitoria implements GetReitoria {
  constructor (private readonly getReitoriaRepository: GetReitoriaRepository) {}

  async get (
    getReitoria: GetReitoria.Params
  ): Promise<GetReitoria.Result | false> {
    return this.getReitoriaRepository.get(getReitoria)
  }
}

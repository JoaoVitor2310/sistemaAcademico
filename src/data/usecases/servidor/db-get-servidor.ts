import { GetServidorRepository } from '@/data/db/servidor'
import { GetServidor } from '@/domain/usecases/servidor'

export class DbGetServidor implements GetServidor {
  constructor (private readonly getServidorRepository: GetServidorRepository) {}

  async get (
    getServidor: GetServidor.Params
  ): Promise<GetServidor.Result | false> {
    return this.getServidorRepository.get(getServidor)
  }
}

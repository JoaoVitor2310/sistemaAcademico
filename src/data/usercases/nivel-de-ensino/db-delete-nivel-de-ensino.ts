import { DeleteNivelDeEnsinoRepository } from '@/data/db/nivel_de_ensino'
import { DeleteNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbDeleteNivelDeEnsino implements DeleteNivelDeEnsino {
  constructor (
    private readonly deleteNivelDeEnsinoRepository: DeleteNivelDeEnsinoRepository
  ) { }

  async delete (deleteNivelDeEnsino: DeleteNivelDeEnsino.Params): Promise<DeleteNivelDeEnsino.Result> {
    const nivelDeEnsino = await this.deleteNivelDeEnsinoRepository.delete({ id: deleteNivelDeEnsino.id })
    if (!nivelDeEnsino) throw new NotFoundError('NivelDeEnsino not found')
    return nivelDeEnsino
  }
}

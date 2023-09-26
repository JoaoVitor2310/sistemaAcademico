import { GetNivelDeEnsinoRepository } from '@/data/db/nivel_de_ensino/get-nivel-de-ensino-repository'
import { GetNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino/get-nivel-de-ensino'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbGetNivelDeEnsino implements GetNivelDeEnsino {
  constructor (
    private readonly getNivelDeEnsinoRepository: GetNivelDeEnsinoRepository
  ) { }

  async get (getNivelDeEnsino: GetNivelDeEnsino.Params): Promise<GetNivelDeEnsino.Result> {
    const nivelDeEnsino = await this.getNivelDeEnsinoRepository.get({ nome: getNivelDeEnsino.nome })
    if (!nivelDeEnsino) throw new NotFoundError('NivelDeEnsino not found')
    return nivelDeEnsino
  }
}

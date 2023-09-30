import { GetDirecaoDeEnsinoRepository } from '@/data/db/direcao_de_ensino/get-direcao-de-ensino-repository'
import { GetDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino/get-direcao-de-ensino'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbGetDirecaoDeEnsino implements GetDirecaoDeEnsino {
  constructor (
    private readonly getDirecaoDeEnsinoRepository: GetDirecaoDeEnsinoRepository
  ) { }

  async get (getDirecaoDeEnsino: GetDirecaoDeEnsino.Params): Promise<GetDirecaoDeEnsino.Result> {
    const direcaoDeEnsino = await this.getDirecaoDeEnsinoRepository.get({
      nome: getDirecaoDeEnsino.nome,
      nivel_ensino: getDirecaoDeEnsino.nivel_ensino,
      telefone: getDirecaoDeEnsino.telefone
    })
    if (!direcaoDeEnsino) throw new NotFoundError('DirecaoDeEnsino not found')
    return direcaoDeEnsino
  }
}

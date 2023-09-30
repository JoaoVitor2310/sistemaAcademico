import { DeleteDirecaoDeEnsinoRepository } from '@/data/db/direcao_de_ensino'
import { DeleteDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbDeleteDirecaoDeEnsino implements DeleteDirecaoDeEnsino {
  constructor (
    private readonly deleteDirecaoDeEnsinoRepository: DeleteDirecaoDeEnsinoRepository
  ) { }

  async delete (deleteDirecaoDeEnsino: DeleteDirecaoDeEnsino.Params): Promise<DeleteDirecaoDeEnsino.Result> {
    const direcaoDeEnsino = await this.deleteDirecaoDeEnsinoRepository.delete({
      id: deleteDirecaoDeEnsino.id,
      nivel_ensino: deleteDirecaoDeEnsino.nivel_ensino,
      telefone: deleteDirecaoDeEnsino.telefone
    })
    if (!direcaoDeEnsino) throw new NotFoundError('DirecaoDeEnsino not found')
    return direcaoDeEnsino
  }
}

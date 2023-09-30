import { DeleteDiretorDeEnsinoRepository } from '@/data/db/diretor_de_ensino'
import { DeleteDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbDeleteDiretorDeEnsino implements DeleteDiretorDeEnsino {
  constructor (
    private readonly deleteDiretorDeEnsinoRepository: DeleteDiretorDeEnsinoRepository
  ) { }

  async delete (deleteDiretorDeEnsino: DeleteDiretorDeEnsino.Params): Promise<DeleteDiretorDeEnsino.Result> {
    const diretorDeEnsino = await this.deleteDiretorDeEnsinoRepository.delete({
      id: deleteDiretorDeEnsino.id,
      dataIni: undefined,
      dataFim: undefined
    })
    if (!diretorDeEnsino) throw new NotFoundError('DiretorDeEnsino not found')
    return diretorDeEnsino
  }
}

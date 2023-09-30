import { GetDiretorDeEnsinoRepository } from '@/data/db/diretor_de_ensino/get-diretor-de-ensino-repository'
import { GetDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino/get-diretor-de-ensino'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbGetDiretorDeEnsino implements GetDiretorDeEnsino {
  constructor (
    private readonly getDiretorDeEnsinoRepository: GetDiretorDeEnsinoRepository
  ) { }

  async get (getDiretorDeEnsino: GetDiretorDeEnsino.Params): Promise<GetDiretorDeEnsino.Result> {
    const diretorDeEnsino = await this.getDiretorDeEnsinoRepository.get({
      dataIni: getDiretorDeEnsino.dataIni,
      dataFim: getDiretorDeEnsino.dataFim
    })
    if (!diretorDeEnsino) throw new NotFoundError('DiretorDeEnsino not found')
    return diretorDeEnsino
  }
}

import { DeleteDiretorRepository } from '@/data/db/diretor'
import { DeleteDiretor } from '@/domain/usecases/diretor'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DbDeleteDiretor implements DeleteDiretor {
  constructor (
    private readonly deleteDiretorRepository: DeleteDiretorRepository
  ) { }

  async delete (deleteDiretor: DeleteDiretor.Params): Promise<DeleteDiretor.Result> {
    const diretor = await this.deleteDiretorRepository.delete({ id: deleteDiretor.id })
    if (!diretor) throw new NotFoundError('Diretor not found')
    return diretor
  }
}

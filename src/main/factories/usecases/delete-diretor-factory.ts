import { DbDeleteDiretor } from '@/data/usercases/diretor/db-delete-diretor'
import { DeleteDiretor } from '@/domain/usecases/diretor'
import { DiretorMongoRepository } from '@/infra/db'

export const makeDbDeleteDiretor = (): DeleteDiretor => {
  const diretorMongoRepository = new DiretorMongoRepository()
  return new DbDeleteDiretor(diretorMongoRepository)
}

import { DbAddDiretor } from '@/data/usercases/diretor'
import { AddDiretor } from '@/domain/usecases/diretor'
import { DiretorMongoRepository } from '@/infra/db'

export const makeDbAddDiretor = (): AddDiretor => {
  const diretorMongoRepository = new DiretorMongoRepository()
  return new DbAddDiretor(diretorMongoRepository)
}

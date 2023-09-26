import { DbAddDiretor } from '@/data/usercases/diretor'
import { AddDiretor } from '@/domain/usecases/diretor'
import { CampusMongoRepository, DiretorMongoRepository } from '@/infra/db'

export const makeDbAddDiretor = (): AddDiretor => {
  const diretorMongoRepository = new DiretorMongoRepository()
  const campusMongoDiretor = new CampusMongoRepository()
  return new DbAddDiretor(diretorMongoRepository, campusMongoDiretor)
}

import { DbGetServidor } from '@/data/usecases/servidor'
import { GetServidor } from '@/domain/usecases/servidor'
import { ServidorMongoRepository } from '@/infra/db'

export const makeDbGetServidor = (): GetServidor => {
  const servidorMongoRepository = new ServidorMongoRepository()
  return new DbGetServidor(servidorMongoRepository)
}

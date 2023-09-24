import { DbAddServidor } from '@/data/usecases/servidor'
import { AddServidor } from '@/domain/usecases/servidor'
import { ServidorMongoRepository } from '@/infra/db'

export const makeDbAddServidor = (): AddServidor => {
  const servidorMongoRepository = new ServidorMongoRepository()
  return new DbAddServidor(servidorMongoRepository)
}

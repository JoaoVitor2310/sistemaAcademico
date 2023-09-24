import { AddServidorRepository } from '@/data/db/servidor'
import { AddServidor } from '@/domain/usecases/servidor'
import crypto from 'crypto'

export class DbAddServidor implements AddServidor {
  constructor (
    private readonly addServidorRepository: AddServidorRepository
  ) {}

  async add (addServidor: AddServidor.Params): Promise<AddServidor.Result> {
    const uuid: string = addServidor.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addServidorRepository.add({ ...addServidor, id: uuid })

    return isValid
  }
}

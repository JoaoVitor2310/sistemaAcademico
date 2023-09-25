import { AddReitoriaRepository } from '@/data/db/reitoria'
import { AddReitoria } from '@/domain/usecases/reitoria'
import crypto from 'crypto'

export class DbAddReitoria implements AddReitoria {
  constructor (
    private readonly addReitoriaRepository: AddReitoriaRepository
  ) {}

  async add (addReitoria: AddReitoria.Params): Promise<AddReitoria.Result> {
    const uuid: string = addReitoria.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addReitoriaRepository.add({ ...addReitoria, id: uuid })

    return isValid
  }
}

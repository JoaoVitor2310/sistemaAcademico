import { AddInstitutoRepository } from '@/data/db/instituto'
import { AddInstituto } from '@/domain/usecases/instituto'
import crypto from 'crypto'

export class DbAddInstituto implements AddInstituto {
  constructor (
    private readonly addInstitutoRepository: AddInstitutoRepository
  ) {}

  async add (addInstituto: AddInstituto.Params): Promise<AddInstituto.Result> {
    const uuid: string = addInstituto.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addInstitutoRepository.add({ ...addInstituto, id: uuid })

    return isValid
  }
}

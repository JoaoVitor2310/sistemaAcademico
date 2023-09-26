import { AddNivelDeEnsinoRepository } from '@/data/db/nivel_de_ensino'
import { AddNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'
import crypto from 'crypto'

export class DbAddNivelDeEnsino implements AddNivelDeEnsino {
  constructor (
    private readonly addNivelDeEnsinoRepository: AddNivelDeEnsinoRepository
  ) {}

  async add (addNivelDeEnsino: AddNivelDeEnsino.Params): Promise<AddNivelDeEnsino.Result> {
    const uuid: string = addNivelDeEnsino.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addNivelDeEnsinoRepository.add({ ...addNivelDeEnsino, id: uuid })

    return isValid
  }
}

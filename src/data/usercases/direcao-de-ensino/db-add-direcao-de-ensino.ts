import { AddDirecaoDeEnsinoRepository } from '@/data/db/direcao_de_ensino'
import { AddDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'
import crypto from 'crypto'

export class DbAddDirecaoDeEnsino implements AddDirecaoDeEnsino {
  constructor (
    private readonly addDirecaoDeEnsinoRepository: AddDirecaoDeEnsinoRepository
  ) {}

  async add (addDirecaoDeEnsino: AddDirecaoDeEnsino.Params): Promise<AddDirecaoDeEnsino.Result> {
    const uuid: string = addDirecaoDeEnsino.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addDirecaoDeEnsinoRepository.add({ ...addDirecaoDeEnsino, id: uuid })

    return isValid
  }
}

import { AddDiretorDeEnsinoRepository } from '@/data/db/diretor_de_ensino'
import { AddDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'
import crypto from 'crypto'

export class DbAddDiretorDeEnsino implements AddDiretorDeEnsino {
  constructor (
    private readonly addDiretorDeEnsinoRepository: AddDiretorDeEnsinoRepository
  ) {}

  async add (addInstituto: AddDiretorDeEnsino.Params): Promise<AddDiretorDeEnsino.Result> {
    const uuid: string = addInstituto.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addDiretorDeEnsinoRepository.add({ ...addInstituto, id: uuid })

    return isValid
  }
}

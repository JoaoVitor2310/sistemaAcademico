import { AddDiretorRepository } from '@/data/db/diretor'
import { AddDiretor } from '@/domain/usecases/diretor'
import crypto from 'crypto'

export class DbAddDiretor implements AddDiretor {
  constructor (
    private readonly addDiretorRepository: AddDiretorRepository
  ) {}

  async add (addDiretor: AddDiretor.Params): Promise<AddDiretor.Result> {
    if (!this.validateDate(addDiretor.dataInicio, addDiretor.dataFim)) return false
    const uuid: string = addDiretor.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addDiretorRepository.add({ ...addDiretor, id: uuid })
    return isValid
  }

  private validateDate (dataInicio: string, dataFim: string): boolean {
    const dataInicioToDate = Date.parse(dataInicio)
    const dataFimToDate = Date.parse(dataFim)
    return dataInicioToDate < dataFimToDate
  }
}

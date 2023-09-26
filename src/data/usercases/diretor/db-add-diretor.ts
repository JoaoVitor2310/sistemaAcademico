import { GetCampusRepository } from '@/data/db/campus'
import { AddDiretorRepository } from '@/data/db/diretor'
import { AddDiretor } from '@/domain/usecases/diretor'

import crypto from 'crypto'

export class DbAddDiretor implements AddDiretor {
  constructor (
    private readonly addDiretorRepository: AddDiretorRepository,
    private readonly getCampusRepository: GetCampusRepository
  ) {}

  async add (addDiretor: AddDiretor.Params): Promise<AddDiretor.Result> {
    let isValid = false
    const campusFound = await this.getCampusRepository.get({ nome: addDiretor.campus })
    if (!campusFound) return isValid
    if (!this.validatePeriod(addDiretor.dataInicio, addDiretor.dataFim)) return isValid
    const uuid: string = addDiretor.id || crypto.randomUUID()
    isValid = await this.addDiretorRepository.add({ ...addDiretor, id: uuid })
    return isValid
  }

  private validatePeriod (dataInicio: string, dataFim: string): boolean {
    const dataInicioToDate = Date.parse(dataInicio)
    const dataFimToDate = Date.parse(dataFim)
    if (isNaN(dataInicioToDate) || isNaN(dataFimToDate)) return false
    const inicioMenorQueFim = dataInicioToDate < dataFimToDate
    return inicioMenorQueFim
  }
}

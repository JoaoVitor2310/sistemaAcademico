import { AddReitoriaRepository } from '@/data/db/reitoria'
import { AddReitoria } from '@/domain/usecases/reitoria'
import { ExistingReitoriaError, InvalidTelefoneError } from '@/presentation/errors';
import { NotFoundError } from '@/presentation/errors/not-found-error';
import crypto from 'crypto'

export class DbAddReitoria implements AddReitoria {
  constructor (
    private readonly addReitoriaRepository: AddReitoriaRepository
  ) {}

  async add (addReitoria: AddReitoria.Params): Promise<AddReitoria.Result> {

    const existingReitoria = await this.addReitoriaRepository.findByNome(addReitoria.nome)
    if (existingReitoria) throw new ExistingReitoriaError();

    if (!/^\d{11}$/.test(addReitoria.telefone)) throw new InvalidTelefoneError();

    const uuid: string = addReitoria.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addReitoriaRepository.add({ ...addReitoria, id: uuid })

    return isValid
  }
}

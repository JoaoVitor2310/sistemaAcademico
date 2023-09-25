import { AddServidorRepository } from '@/data/db/servidor'
import { AddServidor } from '@/domain/usecases/servidor'
import { ExistingServidorError, InvalidMatriculaError } from '@/presentation/errors';
import { NotFoundError } from '@/presentation/errors/not-found-error';
import crypto from 'crypto'

export class DbAddServidor implements AddServidor {
  constructor (
    private readonly addServidorRepository: AddServidorRepository
  ) {}

  async add (addServidor: AddServidor.Params): Promise<AddServidor.Result> {

    const existingServidor = await this.addServidorRepository.findByNome(addServidor.nome);
    if (existingServidor) throw new ExistingServidorError();
    
    if (!/^\d{12}$/.test(addServidor.matricula)) {
      throw new InvalidMatriculaError();
    }
    
    const uuid: string = addServidor.id || crypto.randomUUID()
    let isValid = false
    isValid = await this.addServidorRepository.add({ ...addServidor, id: uuid })

    return isValid
  }
}

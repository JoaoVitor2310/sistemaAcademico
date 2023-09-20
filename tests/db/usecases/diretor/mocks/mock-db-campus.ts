import { GetCampusRepository } from '@/data/db/campus'
import { GetCampus } from '@/domain/usecases/campus'

export class GetCampusRepositorySpy implements GetCampusRepository {
  params: GetCampus.Params
  result = null

  async get (params: GetCampus.Params): Promise<GetCampus.Result> {
    this.params = params
    if (params.nome === '') return this.result
    return {
      id: 'string',
      nome: 'string',
      endereco: 'string',
      telefone: 'string'
    }
  }
}

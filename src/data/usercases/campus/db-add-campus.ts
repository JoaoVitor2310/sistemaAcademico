import { AddCampusRepository, GetCampusRepository } from '@/data/db/campus/'
import { AddCampus } from '@/domain/usecases/campus'

export class DbAddCampus implements AddCampus {
  constructor (
    private readonly addCampusRepository: AddCampusRepository,
    private readonly getCampusRepository: GetCampusRepository
  ) { }

  async add (addCampus: AddCampus.Params): Promise<AddCampus.Result> {
    let isValid = false
    const campusFound = await this.getCampusRepository.get({ nome: addCampus.nome })
    if (campusFound) return isValid
    const uuid = addCampus.id || crypto.randomUUID()
    isValid = await this.addCampusRepository.add({ ...addCampus, id: uuid })
    return isValid
  }
}

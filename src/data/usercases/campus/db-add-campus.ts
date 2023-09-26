import { AddCampusRepository } from '@/data/db/campus/add-campus-repository'
import { AddCampus } from '@/domain/usecases/campus'

export class DbAddCampus implements AddCampus {
  constructor (
    private readonly addCampusRepository: AddCampusRepository
  ) { }

  async add (addCampus: AddCampus.Params): Promise<AddCampus.Result> {
    let isValid = false
    const uuid = addCampus.id || crypto.randomUUID()
    isValid = await this.addCampusRepository.add({ ...addCampus, id: uuid })
    return isValid
  }
}

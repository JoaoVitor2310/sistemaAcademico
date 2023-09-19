import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, noContent, serverError } from '@/presentation/helpers'
import { Campus } from '@/domain/model/campus'
import { MongoHelper } from '@/infra/db'

export interface AddCampus {
  add: (addCampus: AddCampus.Params) => Promise<AddCampus.Result>
}

export namespace AddCampus {
  export type Params = Campus.Params
  export type Result = boolean
}

export class AddCampusController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addCampus: AddCampus
  ) { }

  async handle (request: AddCampusController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const uuid = crypto.randomUUID()
      await this.addCampus.add({ ...request, id: uuid })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export interface AddCampusRepository {
  add: (input: AddCampusRepository.Params) => Promise<AddCampusRepository.Result>
}

export namespace AddCampusRepository {
  export type Params = AddCampus.Params
  export type Result = boolean
}

export class CampusMongoRepository implements AddCampusRepository {
  async add (data: AddCampus.Params): Promise<AddCampus.Result> {
    const campusCollection = MongoHelper.getCollection('campus')
    const result = await campusCollection.insertOne(data)
    return result.insertedId !== null
  }
}

export namespace AddCampusController {
  export type Request = Omit<AddCampus.Params, 'id'>
}

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

export const makeDbAddCampus = (): AddCampus => {
  const campusMongoRepository = new CampusMongoRepository()
  return new DbAddCampus(campusMongoRepository)
}

export const makeAddCampusValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['nome','endereco','telefone']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}

export const makeAddCampusController = (): AddCampusController => {
  const addCampusController = new AddCampusController(
    makeAddCampusValidation(),
    makeDbAddCampus()
  )
  return addCampusController
}

export default (router: Router): void => {
  router.post('/campus', adaptRoute(makeAddCampusController()))
}

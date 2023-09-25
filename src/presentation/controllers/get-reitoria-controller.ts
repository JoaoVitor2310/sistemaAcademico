import {
  Controller,
  HttpResponse,
  Validation
} from '@/presentation/interfacestypes'
import { badRequest, serverError, ok, notFound } from '@/presentation/helpers'
import {} from '@/presentation/errors'
import { GetReitoria } from '@/domain/usecases/reitoria'

export class GetReitoriaController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getReitoria: GetReitoria
  ) {}

  async handle (request: GetReitoriaController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const reitoria = await this.getReitoria.get(request)
      if (!reitoria) return notFound()
      return ok(reitoria)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetReitoriaController {
  export type Request = Omit<GetReitoria.Params, 'name' | 'matricula'>
}

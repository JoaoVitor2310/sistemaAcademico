import {
  Controller,
  HttpResponse,
  Validation
} from '@/presentation/interfacestypes'
import { badRequest, serverError, ok, notFound } from '@/presentation/helpers'
import {} from '@/presentation/errors'
import { GetServidor } from '@/domain/usecases/servidor'

export class GetServidorController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getServidor: GetServidor
  ) {}

  async handle (request: GetServidorController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const servidor = await this.getServidor.get(request)
      if (!servidor) return notFound()
      return ok(servidor)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetServidorController {
  export type Request = Omit<GetServidor.Params, 'name' | 'matricula'>
}

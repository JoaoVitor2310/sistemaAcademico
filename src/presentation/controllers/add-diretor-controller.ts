import { AddDiretor } from '@/domain/usecases/diretor'
import { badRequest, noContent, notFound, serverError } from '@/presentation/helpers'
import { Controller, Validation, HttpResponse } from '@/presentation/interfacestypes'
import { NotFoundError } from '@/presentation/errors/'

export class AddDiretorController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addDiretor: AddDiretor
  ) { }

  async handle (request: AddDiretorController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const uuid = crypto.randomUUID()
      await this.addDiretor.add({
        ...request,
        id: uuid
      })
      return noContent()
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace AddDiretorController {
  export type Request = Omit<AddDiretor.Params, 'id'>
}

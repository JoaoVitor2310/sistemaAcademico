import { HttpResponse } from '@/presentation/interfacestypes'
import { ExistingServidorError, InvalidMatriculaError, ServerError, UnauthorizedError } from '@/presentation/errors'
import { NotFoundError } from '../errors/not-found-error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const existingServidor = (error: Error): HttpResponse => ({
  statusCode: 604,
  body: new ExistingServidorError()
})

export const invalidMatricula = (error: Error): HttpResponse => ({
  statusCode: 704,
  body: new InvalidMatriculaError()
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const notFound = (): HttpResponse => ({
  statusCode: 404,
  body: new NotFoundError()
})

import { HttpResponse } from '@/presentation/interfacestypes'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}

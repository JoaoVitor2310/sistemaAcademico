
import { ServidorData } from '@/domain/model/servidor_data'

export class Servidor {
  data: ServidorData

  constructor (data: Servidor.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data

    }
  }
}
export namespace Servidor {
  export type Params = ServidorData

  export type Result = boolean
}

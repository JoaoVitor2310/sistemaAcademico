
import { ReitoriaData } from '@/domain/model/reitoria_data'

export class Reitoria {
  data: ReitoriaData

  constructor (data: Reitoria.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data

    }
  }
}
export namespace Reitoria {
  export type Params = ReitoriaData

  export type Result = boolean
}

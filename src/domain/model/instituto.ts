
import { InstitutoData } from '@/domain/model/instituto_data'

export class Instituto {
  data: InstitutoData

  constructor (data: Instituto.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data

    }
  }
}
export namespace Instituto {
  export type Params = InstitutoData

  export type Result = boolean
}

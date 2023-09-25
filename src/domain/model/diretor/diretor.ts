
import { DiretorData } from '@/domain/model/diretor/diretor_data'

export class Diretor {
  data: DiretorData

  constructor (data: Diretor.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data

    }
  }
}
export namespace Diretor {
  export type Params = DiretorData
  export type Result = boolean
}

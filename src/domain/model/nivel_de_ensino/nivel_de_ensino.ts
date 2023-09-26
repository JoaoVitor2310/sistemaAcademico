
import { NivelDeEnsinoData } from '@/domain/model/nivel_de_ensino'

export class NivelDeEnsino {
  data: NivelDeEnsinoData

  constructor (data: NivelDeEnsino.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data

    }
  }
}
export namespace NivelDeEnsino {
  export type Params = NivelDeEnsinoData

  export type Result = boolean
}


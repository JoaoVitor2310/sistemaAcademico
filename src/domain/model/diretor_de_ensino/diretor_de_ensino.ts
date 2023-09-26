
import { DiretorDeEnsinoData } from '@/domain/model/diretor_de_ensino'

export class DiretorDeEnsino {
  data: DiretorDeEnsinoData

  constructor (data: DiretorDeEnsino.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data

    }
  }
}
export namespace DiretorDeEnsino {
  export type Params = DiretorDeEnsinoData

  export type Result = boolean
}


import { DirecaoDeEnsinoData } from '@/domain/model/direcao_de_ensino'

export class DirecaoDeEnsino {
  data: DirecaoDeEnsinoData

  constructor (data: DirecaoDeEnsino.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data

    }
  }
}
export namespace DirecaoDeEnsino {
  export type Params = DirecaoDeEnsinoData

  export type Result = boolean
}


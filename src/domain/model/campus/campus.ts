import { CampusData } from '@/domain/model/campus/campus_data'

export class Campus {
  data: CampusData

  constructor (data: Campus.Params) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data
    }
  }
}
export namespace Campus {
  export type Params = CampusData
  export type Result = boolean
}

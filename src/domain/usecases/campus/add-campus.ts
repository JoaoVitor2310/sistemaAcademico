import { Campus } from '@/domain/model/campus'

export interface AddCampus {
  add: (addCampus: AddCampus.Params) => Promise<AddCampus.Result>
}

export namespace AddCampus {
  export type Params = Campus.Params
  export type Result = boolean
}

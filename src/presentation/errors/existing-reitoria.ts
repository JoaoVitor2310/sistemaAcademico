export class ExistingReitoriaError extends Error {
    constructor () {
      super(`Reitor já existe`)
      this.name = 'ExistingReitoriaError'
    }
  }
  
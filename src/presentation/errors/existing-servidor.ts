export class ExistingServidorError extends Error {
    constructor () {
      super('Servidor já existe')
      this.name = 'ExistingServidorError'
    }
  }
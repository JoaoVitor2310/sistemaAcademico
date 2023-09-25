export class InvalidMatriculaError extends Error {
    constructor () {
      super('Matrícula Inválida')
      this.name = 'InvalidMatriculaError'
    }
  }
export class InvalidTelefoneError extends Error {
    constructor () {
        super('Telefone Inválido')
        this.name= 'InvalidTelefoneError'
    }
}
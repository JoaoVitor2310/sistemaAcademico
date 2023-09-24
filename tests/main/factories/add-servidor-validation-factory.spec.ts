import { makeAddServidorValidation } from '@/main/factories'
import {
  ValidationComposite,
  RequiredFieldValidation
} from '@/validation/validators'
import { Validation } from '@/presentation/interfacestypes'

jest.mock('@/validation/validators/validation-composite')

describe('Add Servidor Validation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddServidorValidation()
    const validations: Validation[] = []
    for (const field of ['nome', 'matricula']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})

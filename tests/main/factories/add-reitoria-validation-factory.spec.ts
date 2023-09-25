import { makeAddReitoriaValidation } from '@/main/factories'
import {
  ValidationComposite,
  RequiredFieldValidation
} from '@/validation/validators'
import { Validation } from '@/presentation/interfacestypes'

jest.mock('@/validation/validators/validation-composite')

describe('Add Reitoria Validation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddReitoriaValidation()
    const validations: Validation[] = []
    for (const field of ['nome', 'matricula']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
